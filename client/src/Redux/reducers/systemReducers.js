import * as types from '../../types';

const initialState = {
  theme: 'theme-light',
  error: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_THEME:
      return { ...state, theme: action.payload };
    case types.ERROR:
      return action.payload;
    default:
      return state;
  }
};
