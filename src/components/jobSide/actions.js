export const SELECT_JOB_TYPE = 'SELECT_JOB_TYPE';

export function selectJobType(tag) {
    return {
      type: SELECT_JOB_TYPE,
      payload: tag
    }
}
