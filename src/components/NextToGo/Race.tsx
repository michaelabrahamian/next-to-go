import { RaceSummary } from '../../types/RaceSummary';

type RaceProps = {
  race: RaceSummary;
};

export const Race = ({ race }: RaceProps): JSX.Element => (
  <li>
    {race.meetingName}, {race.raceNumber}
  </li>
);
