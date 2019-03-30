// @flow
import * as types from "../../types";

export default (state = null, action) => {
	switch (action.type) {
    case types.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
