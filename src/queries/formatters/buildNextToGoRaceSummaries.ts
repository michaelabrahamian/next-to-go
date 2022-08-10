import { compareDesc } from 'date-fns';
import { RaceSummary, RaceSummaryResponse } from '../../types/RaceSummary';
import { formatRaceSummaryResponse } from './formatRaceSummaryResponse';

export const buildNextToGoRaceSummaries = (
  nextToGoIDs: string[],
  raceSummaries: Record<string, RaceSummaryResponse>
): RaceSummary[] => {
  const nextToGoRaceSummaries: RaceSummary[] = [];

  console.log('raceSummaries', raceSummaries);

  nextToGoIDs.forEach((nextToGoID) => {
    const raceSummary = raceSummaries[nextToGoID];

    if (raceSummary) {
      nextToGoRaceSummaries.push(formatRaceSummaryResponse(raceSummary));
    }
  });

  console.log('nextToGoRaceSummaries', nextToGoRaceSummaries);

  return nextToGoRaceSummaries.sort((raceA, raceB) =>
    compareDesc(raceA.startTime, raceB.startTime)
  );
};
