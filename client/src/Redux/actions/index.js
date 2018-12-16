import axios from 'axios';
import * as types from "../types";

export const fetchHotels = () => async(dispatch) => {
	const res = await axios.get('/api/hotels');
	dispatch({
		type: types.FETCH_HOTELS,
		payload: res.data.hotels
	});
};

//******* AUTH *********//
export const signUpUser = (formProps, callback) => async (dispatch) => {
	try {
		const response = await axios.post("/api/signup", formProps);
		dispatch({
			type: types.AUTH_USER,
			payload: response.data.token
		});
		callback();
	} catch (e) {
		dispatch({
			type: types.AUTH_ERROR,
			payload: 'Email is in use'
		});
	}
};

export const fetchUser = () => async(dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({
		type: types.FETCH_USER,
		payload: res.data
	});
};

export const searchHotels = (text) => ({
	type: types.SEARCH_HOTELS,
	text
});

export const switchView = (id) => ({
	type: types.SWITCH_VIEW,
	id
});

export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post('/api/stripe', token);
	dispatch({
		type: types.FETCH_CREDITS,
		payload: res.data
	});
};

export const fetchHotelsLength = () => async(dispatch) => {
	const res = await axios.get('/api/count');
	dispatch({
		type: types.HOTELS_LENGTH,
		payload: res.data
	});
};

export const submitSurvey = (values, history) => async (dispatch) => {
	console.log('VALUES', values);
	const res = await axios.post('/api/hotels', values);
	history.push('/add/success');
	dispatch({
		type: types.SUBMIT_SURVEY,
		payload: res.data.createdHotel
	});
};
