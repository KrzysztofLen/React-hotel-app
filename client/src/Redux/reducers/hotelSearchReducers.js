// @flow
import * as types from "../types";

export default (state = "", action) => {
  switch (action.type) {
    case types.SEARCH_HOTELS:
      return action.text;
    default:
      return state;
  }
};
