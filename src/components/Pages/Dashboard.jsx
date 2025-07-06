import { useState, useEffect } from 'react';
import LaunchCard from '../LaunchCard';
import Filters from '../Filters';
import Header from '../Header';
import { Dialog, DialogContent } from '../ui/dialog';
import { fetchAllLaunches, fetchUpcomingLaunches, fetchPastLaunches } from '../../API/spacex';

export default function Dashboard() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setLoading(true);

    const loader =
      filter === 'Upcoming'
        ? fetchUpcomingLaunches()
        : filter === 'Past'
        ? fetchPastLaunches()
        : fetchAllLaunches();

    loader.then(async (data) => {
      const formatted = await Promise.all(
        data.map(async (launch, index) => {
          let orbit = 'Unknown';
          try {
            if (launch.payloads?.length) {
              const res = await fetch(`https://api.spacexdata.com/v4/payloads/${launch.payloads[0]}`);
              const payloadData = await res.json();
              orbit = payloadData.orbit || 'Unknown';
            }
          } catch {}

          let locationName = 'Unknown';
          try {
            if (launch.launchpad) {
              const padRes = await fetch(`https://api.spacexdata.com/v4/launchpads/${launch.launchpad}`);
              const padData = await padRes.json();
              locationName = padData.name || 'Unknown';
            }
          } catch {}

          let rocketName = 'Unknown';
          try {
            if (launch.rocket) {
              const rocketRes = await fetch(`https://api.spacexdata.com/v4/rockets/${launch.rocket}`);
              const rocketData = await rocketRes.json();
              rocketName = rocketData.name || 'Unknown';
            }
          } catch {}

          const image = launch.links?.patch?.small || '';

          return {
            id: launch.id,
            no: String(index + 1).padStart(2, '0'),
            date: new Date(launch.date_utc).toLocaleString('en-GB', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            }),
            locationName,
            mission: launch.name,
            orbit,
            status: launch.upcoming ? 'Upcoming' : launch.success ? 'Success' : 'Failed',
            rocket: rocketName,
            image,
          };
        })
      );
      setLaunches(formatted);
      setLoading(false);
    });
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Filters currentFilter={filter} setFilter={setFilter} />

      {loading ? (
        <p className="text-center p-6 text-blue-600">Loading launches...</p>
      ) : launches.length === 0 ? (
        <p className="text-center p-6 text-blue-600">No launches found.</p>
      ) : (
        <div className="p-4 max-w-6xl mx-auto">

          {/* Sticky Header Row with 5px margin left/right */}
          <div className="mx-[15px] grid grid-cols-7 gap-4 text-[10px] sm:text-xs font-bold text-gray-700 uppercase py-2 border-b border-gray-200 bg-gray-300 top-14 sm:top-16 z-10 shadow-sm">
            <div className="w-16 text-center">No</div>
            <div className="text-left">Launched (UTC)</div>
            <div className="text-left">Location</div>
            <div className="text-left">Mission</div>
            <div className="text-left">Orbit</div>
            <div className="text-left">Launch Status</div>
            <div className="text-left">Rocket</div>
          </div>

          {/* Launch Cards */}
          <div className="flex flex-col gap-2">
            {launches.map((launch, index) => (
              <LaunchCard key={index} launch={launch} onClick={() => setSelectedLaunch(launch)} />
            ))}
          </div>
        </div>
      )}

      {/* Modal for Launch Details */}
      {selectedLaunch && (
        <Dialog open={true} onOpenChange={() => setSelectedLaunch(null)}>
          <DialogContent>
            <h2 className="text-lg font-bold mb-4">{selectedLaunch.mission}</h2>
            {selectedLaunch.image && (
              <div className="flex justify-center mb-4">
                <img src={selectedLaunch.image} alt={selectedLaunch.mission} className="w-32 h-32 object-contain" />
              </div>
            )}
            <div className="space-y-2 text-sm">
              <p><strong>Date:</strong> {selectedLaunch.date}</p>
              <p><strong>Location:</strong> {selectedLaunch.locationName}</p>
              <p><strong>Orbit:</strong> {selectedLaunch.orbit}</p>
              <p><strong>Status:</strong> {selectedLaunch.status}</p>
              <p><strong>Rocket:</strong> {selectedLaunch.rocket}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}














