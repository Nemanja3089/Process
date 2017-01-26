export const FETCH_PROCESSES = 'FETCH_PROCESSES';

export function fetchProcesses (processName, id) {
  return {
    type: FETCH_PROCESSES,
    payload: [{ name:"braekfast"}, { name:"dinner" }]
  }
}
