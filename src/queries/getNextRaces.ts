import { NEXT_RACES_ENDPOINT } from '../constants/endpoints';
import { RaceSummary, RaceSummaryResponse } from '../types/RaceSummary';
import { buildNextToGoRaceSummaries } from './formatters/buildNextToGoRaceSummaries';

type NextRacesResponse = {
  data: {
    next_to_go_ids: string[];
    race_summaries: Record<string, RaceSummaryResponse>;
  };
};

export const getNextRaces = async (): Promise<RaceSummary[]> => {
  const nextRacesResponse = await fetch(NEXT_RACES_ENDPOINT);

  if (!nextRacesResponse.ok) {
    throw new Error('Error requesting next races');
  }

  const { data } = (await nextRacesResponse.json()) as NextRacesResponse;

  return buildNextToGoRaceSummaries(data.next_to_go_ids, data.race_summaries);
};
