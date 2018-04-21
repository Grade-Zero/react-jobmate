export const SELECT_JOB = 'SELECT_JOB';

export function selectJob(job) {
  return {
    type: SELECT_JOB,
    payload: job
  }
}
