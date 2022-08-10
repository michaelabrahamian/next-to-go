import { render, screen } from '@testing-library/react';
import { RaceSummary } from '../../types/RaceSummary';
import { RaceList } from './RaceList';

const mockRaces: RaceSummary[] = [
  {
    raceID: '1',
    raceNumber: 1,
    meetingName: 'TEST_MEETING_NAME_1',
  },
  {
    raceID: '2',
    raceNumber: 2,
    meetingName: 'TEST_MEETING_NAME_2',
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
      },
    ];
    render(<RaceList races={races} />);

    expect(screen.queryByText('TEST')).not.toBeInTheDocument();
  });
});
