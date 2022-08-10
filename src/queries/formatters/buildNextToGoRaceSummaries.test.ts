import { RaceSummaryResponse } from '../../types/RaceSummary';
import { buildNextToGoRaceSummaries } from './buildNextToGoRaceSummaries';

test('should return an object with the correct structure', () => {
  const mockNextToGoIDs = ['TEST_RACE_ID_1', 'TEST_RACE_ID_2'];

  const mockRaceSummaries: Record<string, RaceSummaryResponse> = {
    TEST_RACE_ID_1: {
      advertised_start: { seconds: 1 },
      category_id: 'TEST_CATEGORY_ID_1',
      meeting_id: 'TEST_MEETING_ID_1',
      meeting_name: 'TEST_MEETING_NAME_1',
      race_id: 'TEST_RACE_ID_1',
      race_name: 'TEST_RACE_NAME_1',
      race_number: 1,
      venue_country: 'TEST_VENUE_COUNTRY_1',
      venue_id: 'TEST_VENUE_ID_1',
      venue_name: 'TEST_VENUE_NAME_1',
      venue_state: 'TEST_VENUE_STATE_1',
    },
    TEST_RACE_ID_2: {
      advertised_start: { seconds: 1 },
      category_id: 'TEST_CATEGORY_ID_2',
      meeting_id: 'TEST_MEETING_ID_2',
      meeting_name: 'TEST_MEETING_NAME_2',
      race_id: 'TEST_RACE_ID_2',
      race_name: 'TEST_RACE_NAME_2',
      race_number: 2,
      venue_country: 'TEST_VENUE_COUNTRY_2',
      venue_id: 'TEST_VENUE_ID_2',
      venue_name: 'TEST_VENUE_NAME_2',
      venue_state: 'TEST_VENUE_STATE_2',
    },
  };

  expect(
    buildNextToGoRaceSummaries(mockNextToGoIDs, mockRaceSummaries)
  ).toEqual([
    {
      meetingName: 'TEST_MEETING_NAME_1',
      raceID: 'TEST_RACE_ID_1',
      raceNumber: 1,
    },
    {
      meetingName: 'TEST_MEETING_NAME_2',
      raceID: 'TEST_RACE_ID_2',
      raceNumber: 2,
    },
  ]);
});

test('should only include races that are in the next to go list', () => {
  const mockNextToGoIDs = ['TEST_RACE_ID_1', 'TEST_RACE_ID_2'];

  const mockRaceSummaries: Record<string, RaceSummaryResponse> = {
    TEST_RACE_ID_1: {
      advertised_start: { seconds: 1 },
      category_id: 'TEST_CATEGORY_ID_1',
      meeting_id: 'TEST_MEETING_ID_1',
      meeting_name: 'TEST_MEETING_NAME_1',
      race_id: 'TEST_RACE_ID_1',
      race_name: 'TEST_RACE_NAME_1',
      race_number: 1,
      venue_country: 'TEST_VENUE_COUNTRY_1',
      venue_id: 'TEST_VENUE_ID_1',
      venue_name: 'TEST_VENUE_NAME_1',
      venue_state: 'TEST_VENUE_STATE_1',
    },
    TEST_RACE_ID_3: {
      advertised_start: { seconds: 1 },
      category_id: 'TEST_CATEGORY_ID_2',
      meeting_id: 'TEST_MEETING_ID_2',
      meeting_name: 'TEST_MEETING_NAME_2',
      race_id: 'TEST_RACE_ID_3',
      race_name: 'TEST_RACE_NAME_2',
      race_number: 2,
      venue_country: 'TEST_VENUE_COUNTRY_2',
      venue_id: 'TEST_VENUE_ID_2',
      venue_name: 'TEST_VENUE_NAME_2',
      venue_state: 'TEST_VENUE_STATE_2',
    },
  };

  expect(
    buildNextToGoRaceSummaries(mockNextToGoIDs, mockRaceSummaries)
  ).toEqual([
    {
      meetingName: 'TEST_MEETING_NAME_1',
      raceID: 'TEST_RACE_ID_1',
      raceNumber: 1,
    },
  ]);
});

test('should return an empty array if there are no matching race summaries for the next to go races', () => {
  const mockNextToGoIDs = ['TEST_RACE_ID_1', 'TEST_RACE_ID_2'];

  const mockRaceSummaries: Record<string, RaceSummaryResponse> = {};

  expect(
    buildNextToGoRaceSummaries(mockNextToGoIDs, mockRaceSummaries)
  ).toEqual([]);
});

test('should return an empty array if there are no next to go races', () => {
  const mockNextToGoIDs: string[] = [];

  const mockRaceSummaries: Record<string, RaceSummaryResponse> = {
    TEST_RACE_ID_1: {
      advertised_start: { seconds: 1 },
      category_id: 'TEST_CATEGORY_ID_1',
      meeting_id: 'TEST_MEETING_ID_1',
      meeting_name: 'TEST_MEETING_NAME_1',
      race_id: 'TEST_RACE_ID_1',
      race_name: 'TEST_RACE_NAME_1',
      race_number: 1,
      venue_country: 'TEST_VENUE_COUNTRY_1',
      venue_id: 'TEST_VENUE_ID_1',
      venue_name: 'TEST_VENUE_NAME_1',
      venue_state: 'TEST_VENUE_STATE_1',
    },
  };

  expect(
    buildNextToGoRaceSummaries(mockNextToGoIDs, mockRaceSummaries)
  ).toEqual([]);
});
