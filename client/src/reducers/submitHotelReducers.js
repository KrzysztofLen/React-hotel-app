export default function (state = null, action) {
	console.log(action);
	switch (action.type) {
		case 'SUBMIT_SURVEY':
			return action.payload;
		default:
			return state
	}
};