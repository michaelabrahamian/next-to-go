import { render, screen } from '../../testUtils';
import { RaceSummary } from '../../types/RaceSummary';
import { RaceList } from './RaceList';

const mockDate = new Date();

const mockRaces: RaceSummary[] = [
  {
    raceID: '1',
    raceNumber: 1,
    meetingName: 'TEST_MEETING_NAME_1',
    startTime: mockDate,
  },
  {
    raceID: '2',
    raceNumber: 2,
    meetingName: 'TEST_MEETING_NAME_2',
    startTime: mockDate,
  },
];

describe('Race', () => {
  test('should display the correct races', () => {
    render(<RaceList races={mockRaces} />);

    expect(screen.getByText('TEST_MEETING_NAME_1, 1')).toBeInTheDocument();
    expect(screen.getByText('TEST_MEETING_NAME_2, 2')).toBeInTheDocument();
  });

  test('should not display a race if the race ID is missing', () => {
    const races: RaceSummary[] = [
      {
        raceID: '',
        raceNumber: 1,
        meetingName: 'TEST',
        startTime: mockDate,
      },
    ];
    render(<RaceList races={races} />);

    expect(screen.queryByText('TEST')).not.toBeInTheDocument();
  });
});
