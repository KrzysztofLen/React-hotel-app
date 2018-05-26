import {FETCH_HOTELS} from '../actions/types';

export default function (state = null, action) {
	console.log(action);
	switch (action.type) {
		case FETCH_HOTELS:
			return action.payload || false;
		default:
			return state;
	}
}