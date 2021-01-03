import { SET_THEME, ERROR } from '../../types';

const initialState = {
  theme: 'theme-light',
  error: [],
};

export type Action = {
  payload: string;
  type: string;
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case ERROR:
      return action.payload;
    default:
      return state;
  }
};
