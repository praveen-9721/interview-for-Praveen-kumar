import { Dialog, DialogContent, DialogTitle } from '../components/ui/dialog';

export default function LaunchModal({ launch, onClose }) {
  if (!launch) return null;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>{launch.mission}</DialogTitle>
        {launch.image && (
          <div className="flex justify-center mb-4">
            <img src={launch.image} alt={launch.mission} className="w-32 h-32 object-contain" />
          </div>
        )}
        <div className="space-y-2 text-sm">
          <p><strong>Date:</strong> {launch.date}</p>
          <p><strong>Location:</strong> {launch.locationName}</p>
          <p><strong>Orbit:</strong> {launch.orbit || 'Unknown'}</p>
          <p><strong>Status:</strong> {launch.status}</p>
          <p><strong>Rocket:</strong> {launch.rocket}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
