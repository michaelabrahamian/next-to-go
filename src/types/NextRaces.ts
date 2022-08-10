import { RaceSummaryResponse } from './RaceSummary';

export type NextRacesResponse = {
  data: {
    next_to_go_ids: string[];
    race_summaries: Record<string, RaceSummaryResponse>;
  };
};
