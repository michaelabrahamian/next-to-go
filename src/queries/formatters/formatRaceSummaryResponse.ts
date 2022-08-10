import { RaceSummary, RaceSummaryResponse } from '../../types/RaceSummary';

export const formatRaceSummaryResponse = (
  response: RaceSummaryResponse
): RaceSummary => ({
  raceID: response.race_id,
  meetingName: response.meeting_name,
  raceNumber: response.race_number,
  startTime: new Date(response.advertised_start.seconds * 1_000),
});
