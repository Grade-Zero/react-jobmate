export const SELECT_JOB_TYPE = 'SELECT_JOB_TYPE';
export const SELECT_INDUSTRY_TYPE = 'SELECT_INDUSTRY_TYPE';
export const SELECT_JOB = 'SELECT_JOB';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export function selectJob(job) {
  return {
    type: SELECT_JOB,
    payload: job
  }
}

export function selectJobType(tag) {
  return {
    type: SELECT_JOB_TYPE,
    payload: tag
  }
}

export function selectIndustryType(tag) {
  return {
    type: SELECT_INDUSTRY_TYPE,
    payload: tag
  }
}

export function clearFilters() {
  return {
    type: CLEAR_FILTERS,
    payload: null
  }
}
