export const viewSwitch = (state = 1, action) => {
	switch(action.type) {
		case 'SWITCH_VIEW':
			return action.id;
		default:
			return state;
	}
};