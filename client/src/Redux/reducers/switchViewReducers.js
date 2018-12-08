// @flow
import * as types from "../types";

export default (state = 1, action) => {
  switch (action.type) {
    case types.SWITCH_VIEW:
      return action.id;
    default:
      return state;
  }
};
