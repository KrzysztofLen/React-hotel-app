// @flow
import * as types from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_HOTELS:
      return action.payload || false;
    default:
      return state;
  }
}
