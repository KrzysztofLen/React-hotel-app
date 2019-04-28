import * as types from "../../types";

export default (state = null, action) => {
	switch (action.type) {
		case types.DELETE_HOTEL:
			return action.payload;
		default:
			return state;
	}
}
