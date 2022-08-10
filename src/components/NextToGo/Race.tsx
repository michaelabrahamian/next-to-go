import { RaceSummary } from '../../types/RaceSummary';
import { CountDownTimer } from './CountDownTimer';

type RaceProps = {
  race: RaceSummary;
};

export const Race = ({ race }: RaceProps): JSX.Element => (
  <li>
    {race.meetingName}, race {race.raceNumber}{' '}
    <CountDownTimer targetDate={race.startTime} />
  </li>
);
