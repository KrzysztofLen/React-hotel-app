export const viewSwitch = (state = 1, action) => {
	console.log(action);
	switch(action.type) {
		case 'SWITCH_VIEW':
			return action.id;
		default:
			return state;
	}
};