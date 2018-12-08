// @flow
import * as types from "../types";

export default function (state = null, action) {
	switch (action.type) {
		case types.SUBMIT_SURVEY:
			return action.payload;
		default:
			return state
	}
};