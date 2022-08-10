import { RaceSummary } from '../../types/RaceSummary';
import { Race } from './Race';

type RacesProps = {
  races: RaceSummary[];
};

export const RaceList = ({ races }: RacesProps): JSX.Element => (
  <ul>
    {races.map((race) => race.raceID && <Race key={race.raceID} race={race} />)}
  </ul>
);
