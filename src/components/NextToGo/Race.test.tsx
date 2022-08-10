import { render, screen } from '../../testUtils';
import { RaceSummary } from '../../types/RaceSummary';
import { Race } from './Race';

const mockRace: RaceSummary = {
  raceID: '1',
  raceNumber: 2,
  meetingName: 'TEST_MEETING_NAME',
  startTime: new Date(),
};

describe('Race', () => {
  test('should display the correct race label', () => {
    render(<Race race={mockRace} />);

    expect(screen.getByText('TEST_MEETING_NAME, 2')).toBeInTheDocument();
  });
});
