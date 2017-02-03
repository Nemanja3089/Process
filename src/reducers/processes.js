import { FETCH_PROCESSES, STUB_PROCESSES, CHANGE_PROCESS_NAME, ADD_PROCESSES } from '../actions/processes';

const initialState = {
  processes: [],
  name:null
}

export default function proces (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_PROCESSES:
      return {...state, processes: action.payload};
    case STUB_PROCESSES:
      return {...state, processes:action.payload};
    case CHANGE_PROCESS_NAME:
      return {...state, name: action.payload};
    case ADD_PROCESSES:
      return {...addP(state)};

  }
  return state;
}

function addP(state) {
  const newProcesses = [...state.processes, { name: state.name, actions: [] }];
  return {...state, processes: newProcesses};
}
