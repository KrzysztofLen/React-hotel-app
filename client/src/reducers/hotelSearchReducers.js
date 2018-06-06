import {SEARCH_HOTELS} from "../actions/types";

export default function (state = '', action) {
	console.log(action);
	switch (action.type) {
		case SEARCH_HOTELS:
			return action.text;
		default:
			return state
	}
};