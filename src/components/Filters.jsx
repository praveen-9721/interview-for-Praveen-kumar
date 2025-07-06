import { Button } from '../components/ui/button';

export default function Filters({ currentFilter, setFilter }) {
  return (
    <div className="p-4 flex flex-wrap gap-2 justify-center">
      <Button onClick={() => setFilter('All')} variant={currentFilter === 'All' ? 'default' : 'outline'}>
        All
      </Button>
      <Button onClick={() => setFilter('Upcoming')} variant={currentFilter === 'Upcoming' ? 'default' : 'outline'}>
        Upcoming
      </Button>
      <Button onClick={() => setFilter('Past')} variant={currentFilter === 'Past' ? 'default' : 'outline'}>
        Past
      </Button>
    </div>
  );
}
