import { compareAsc } from 'date-fns';
import { RaceSummary, RaceSummaryResponse } from '../../types/RaceSummary';
import { formatRaceSummaryResponse } from './formatRaceSummaryResponse';

export const buildNextToGoRaceSummaries = (
  nextToGoIDs: string[],
  raceSummaries: Record<string, RaceSummaryResponse>
): RaceSummary[] => {
  const nextToGoRaceSummaries: RaceSummary[] = [];

  nextToGoIDs.forEach((nextToGoID) => {
    const raceSummary = raceSummaries[nextToGoID];

    if (raceSummary) {
      nextToGoRaceSummaries.push(formatRaceSummaryResponse(raceSummary));
    }
  });

  return sortByStartTimeAscending(nextToGoRaceSummaries);
};

export const sortByStartTimeAscending = (
  raceSummaryList: RaceSummary[]
): RaceSummary[] =>
  [...raceSummaryList].sort((raceA, raceB) =>
    compareAsc(raceA.startTime, raceB.startTime)
  );
