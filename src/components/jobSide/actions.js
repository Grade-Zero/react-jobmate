export const SELECT_JOB_TYPE = 'SELECT_JOB_TYPE';
export const SELECT_INDUSTRY = 'SELECT_INDUSTRY';

export function selectJobType(tag) {
    return {
      type: SELECT_JOB_TYPE,
      payload: tag
    }
}

export function selectIndustry(industry) {
    return {
      type: SELECT_INDUSTRY,
      payload: industry
    }
}
