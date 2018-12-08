// @flow
import * as types from "../types";

export default function(state = 0, action) {
  switch (action.type) {
    case types.HOTELS_LENGTH:
      return action.payload;
    default:
      return state;
  }
}
