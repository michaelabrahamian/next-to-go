import { ListItem, ListItemText } from '@mui/material';
import { RaceSummary } from '../../types/RaceSummary';
import { CountDownTimer } from './CountDownTimer';

type RaceProps = {
  race: RaceSummary;
};

export const Race = ({ race }: RaceProps): JSX.Element => (
  <ListItem>
    <ListItemText
      primary={`${race.meetingName} race ${race.raceNumber}`}
      secondary={<CountDownTimer targetDate={race.startTime} />}
    />
  </ListItem>
);
