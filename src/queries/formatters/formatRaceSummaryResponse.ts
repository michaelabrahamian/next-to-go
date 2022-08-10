import { RaceSummary, RaceSummaryResponse } from '../../types/RaceSummary';

export const formatRaceSummaryResponse = (
  response: RaceSummaryResponse
): RaceSummary => ({
  raceID: response.race_id,
  meetingName: response.meeting_name,
  raceNumber: response.race_number,
});
