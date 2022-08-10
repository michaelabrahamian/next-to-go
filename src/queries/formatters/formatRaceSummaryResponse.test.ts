import { RaceSummaryResponse } from '../../types/RaceSummary';
import { formatRaceSummaryResponse } from './formatRaceSummaryResponse';

test('should return the correct payload', () => {
  const mockRaceSummaryResponse: RaceSummaryResponse = {
    advertised_start: { seconds: 1 },
    category_id: 'TEST_CATEGORY_ID',
    meeting_id: 'TEST_MEETING_ID',
    meeting_name: 'TEST_MEETING_NAME',
    race_id: 'TEST_RACE_ID',
    race_name: 'TEST_RACE_NAME',
    race_number: 1,
    venue_country: 'TEST_VENUE_COUNTRY',
    venue_id: 'TEST_VENUE_ID',
    venue_name: 'TEST_VENUE_NAME',
    venue_state: 'TEST_VENUE_STATE',
  };

  expect(formatRaceSummaryResponse(mockRaceSummaryResponse)).toEqual({
    meetingName: 'TEST_MEETING_NAME',
    raceID: 'TEST_RACE_ID',
    raceNumber: 1,
  });
});
