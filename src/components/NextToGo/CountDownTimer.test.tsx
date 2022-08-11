import { getCountdownText } from './CountDownTimer';

const mockCurrentTimestamp = new Date('2022-01-01T01:00:00');

beforeEach(() => {
  jest.useFakeTimers().setSystemTime(mockCurrentTimestamp);
});

afterEach(() => {
  jest.useRealTimers();
});

describe('getCountdownText', () => {
  test('should return the correct text for a future time more than a minute ago', () => {
    const fiveMinutesInTheFuture = new Date('2022-01-01T01:05:00');

    expect(getCountdownText(fiveMinutesInTheFuture)).toEqual('in 5 minutes');
  });

  test('should return the correct text for target time less than a minute in the future', () => {
    const twentyNineSecondsInTheFuture = new Date('2022-01-01T01:00:29');

    expect(getCountdownText(twentyNineSecondsInTheFuture)).toEqual(
      'in 29 seconds'
    );
  });

  test('should return the correct text a past time less than a minute ago', () => {
    const tenSecondsAgo = new Date('2022-01-01T00:59:50');

    expect(getCountdownText(tenSecondsAgo)).toEqual('10 seconds ago');
  });

  test('should return the correct text a past time more than a minute ago', () => {
    const fourMinutesAgo = new Date('2022-01-01T00:55:52');

    expect(getCountdownText(fourMinutesAgo)).toEqual('4 minutes ago');
  });
});
