export type RaceSummaryResponse = {
  advertised_start: { seconds: number };
  category_id: string;
  meeting_id: string;
  meeting_name: string;
  // race_form:
  race_id: string;
  race_name: string;
  race_number: number;
  venue_country: string;
  venue_id: string;
  venue_name: string;
  venue_state: string;
};

export type RaceSummary = {
  raceID: string;
  meetingName: string;
  raceNumber: number;
};
