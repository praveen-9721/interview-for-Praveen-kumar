// import { Card, CardContent } from '../components/ui/card';

export default function LaunchCard({ launch, onClick }) {
  return (
    <div
      onClick={onClick}
      className="grid grid-cols-2 sm:grid-cols-7 gap-4 items-center bg-white rounded-lg shadow-sm p-3 cursor-pointer hover:bg-blue-950 hover:text-blue-100 hover:scale-105 transition duration-200"
    >
      <div className="w-16 text-center font-semibold">{launch.no}</div>
      <div>{launch.date}</div>
      <div>{launch.locationName}</div>
      <div>{launch.mission}</div>
      <div>{launch.orbit}</div>
      <div>
        <span className={`px-2 py-1 rounded-full text-xs ${
          launch.status === 'Success'
            ? 'bg-green-100 text-green-800'
            : launch.status === 'Failed'
            ? 'bg-red-100 text-red-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {launch.status}
        </span>
      </div>
      <div>{launch.rocket}</div>
    </div>
  );
}
