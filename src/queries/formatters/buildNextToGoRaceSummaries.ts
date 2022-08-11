import { compareAsc } from 'date-fns';
import { RaceSummary, RaceSummaryResponse } from '../../types/RaceSummary';
import { formatRaceSummaryResponse } from './formatRaceSummaryResponse';

export const buildNextToGoRaceSummaries = (
  nextToGoIDs: string[],
  raceSummaries: Record<string, RaceSummaryResponse>
): RaceSummary[] => {
  const nextToGoRaceSummaries: RaceSummary[] = [];

  const oneMinuteAgo_MS = Date.now() - 60 * 1_000;

  nextToGoIDs.forEach((nextToGoID) => {
    const raceSummary = raceSummaries[nextToGoID];

    const isRaceStartTimeAfterOneMinuteAgo =
      raceSummary?.advertised_start.seconds * 1_000 - oneMinuteAgo_MS > 0;

    if (isRaceStartTimeAfterOneMinuteAgo) {
      nextToGoRaceSummaries.push(formatRaceSummaryResponse(raceSummary));
    }
  });

  return sortByStartTimeAscending(nextToGoRaceSummaries).slice(0, 5);
};

export const sortByStartTimeAscending = (
  raceSummaryList: RaceSummary[]
): RaceSummary[] =>
  [...raceSummaryList].sort((raceA, raceB) =>
    compareAsc(raceA.startTime, raceB.startTime)
  );
