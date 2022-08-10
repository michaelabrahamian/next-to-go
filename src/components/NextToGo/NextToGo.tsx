import { useQuery } from '@tanstack/react-query';
import { getNextRaces } from '../../queries/getNextRaces';
import { RaceList } from './RaceList';

export const NextToGo = (): JSX.Element => {
  const getNextRacesQuery = useQuery(['nextRaces'], getNextRaces);

  return (
    <div>
      <h2>Next To Go</h2>
      <RaceList races={getNextRacesQuery.data ?? []} />
    </div>
  );
};
