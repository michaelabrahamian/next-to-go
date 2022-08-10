const NEDS_BASE_URL =
  process.env.REACT_APP_NEDS_BASE_URL ?? 'https://api.neds.com.au';
const RACING_V1_ENDPOINT = `${NEDS_BASE_URL}/rest/v1/racing`;
export const NEXT_RACES_ENDPOINT = `${RACING_V1_ENDPOINT}/?method=nextraces&count=10`;
