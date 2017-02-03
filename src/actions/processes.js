import processes from "../data/processes";
export const FETCH_PROCESSES = 'FETCH_PROCESSES';
export const STUB_PROCESSES = 'STUB_PROCESSES';
export const ADD_PROCESSES = 'ADD_PROCESSES';
export const CHANGE_PROCESS_NAME = 'CHANGE_PROCESS_NAME';

export function fetchProcesses () {
  return {
    type: FETCH_PROCESSES,
    payload: [{ name:"braekfast"}, { name:"dinner" }]
  }
}

export function stubProcesses () {
  return {
    type: STUB_PROCESSES,
    payload: processes
  }
}

export function addProcesses () {
  return {
    type: ADD_PROCESSES,
    payload: processes
  }
}

export function processNameChange (name) {
  return {
    type: CHANGE_PROCESS_NAME,
    payload: name
  }
}
