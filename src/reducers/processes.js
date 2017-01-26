import { FETCH_PROCESSES } from '../actions/processes';

const initialState = {
  processes: []
}

export default function processes (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_PROCESSES:
      return {...state, processes: action.payload};
  }
  return state;
}
