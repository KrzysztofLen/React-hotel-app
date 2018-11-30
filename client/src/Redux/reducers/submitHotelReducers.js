// @flow
const SUBMIT_FORM = 'SUBMIT_FORM';

export default function (state = null, action) {
	switch (action.type) {
		case SUBMIT_FORM:
			return action.payload;
		default:
			return state
	}
};