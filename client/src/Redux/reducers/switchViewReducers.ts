import { SWITCH_VIEW } from './../../types';

const initialState: string = '2';

export type Action = {
  type: string;
  id: string;
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SWITCH_VIEW:
      return action.id;
    default:
      return state;
  }
};
