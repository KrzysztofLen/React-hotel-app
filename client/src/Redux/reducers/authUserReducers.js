import * as types from "../../types";

const INITIAL_STATE = {
	authenticated: "",
	errorMessage: ""
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.AUTH_USER:
			return {
				...state, authenticated: action.payload
			};
		case types.AUTH_ERROR:
			return {
				...state, errorMessage: action.payload
			};
		default:
			return state;
	}
}