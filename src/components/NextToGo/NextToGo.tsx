import { useQuery } from '@tanstack/react-query';
import { getNextRaces } from '../../queries/getNextRaces';
import { RaceList } from './RaceList';

const REFETCH_INTERVAL = 60 * 1_000; // refresh every minute

export const NextToGo = (): JSX.Element => {
  const getNextRacesQuery = useQuery(['nextRaces'], getNextRaces, {
    refetchInterval: REFETCH_INTERVAL,
  });

  return (
    <div>
      <h2>Next To Go</h2>
      <RaceList races={getNextRacesQuery.data ?? []} />
    </div>
  );
};
