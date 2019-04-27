import * as types from "../../types";

export default (state = [], action) => {
	switch (action.type) {
		case types.ERROR:
			return action.payload;
		default:
			return state;
	}
}
