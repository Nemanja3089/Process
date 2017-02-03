const initialState = {
  username: null,
  password: null
}

export default function login (state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN':
      return {...state, username: 'bla', password: 'pass'};
  }
  return state;
}
