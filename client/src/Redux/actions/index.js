import axios from 'axios';
import * as types from "../../types";
import {AUTH_ERROR} from "../../types";

export const fetchHotels = () => async (dispatch) => {
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
			payload: authErrors('Email is in use')
		});
	}
};

//TODO Use universal AC to send errors
export const authErrors = (error) => {
	return {
		type: types.AUTH_ERROR,
		payload: error
	}
}

export const signInUser = (formProps, callback) => async (dispatch) => {
	try {
		const response = await axios.post("/api/signin", formProps);
		dispatch({
			type: types.AUTH_USER,
			payload: response.data.token
		});
		localStorage.setItem('token', response.data.token);
		callback();
	} catch (e) {
		dispatch({
			type: types.AUTH_ERROR,
			payload: 'Invalid credentials'
		});
	}
};

export const signout = () => {
	localStorage.removeItem('token');
	return {
		type: types.AUTH_USER,
		payload: ""
	}
};

export const fetchUser = () => async (dispatch) => {
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

export const fetchHotelsLength = () => async (dispatch) => {
	const res = await axios.get('/api/count');
	dispatch({
		type: types.HOTELS_LENGTH,
		payload: res.data.result
	});
};

export const submitSurvey = (values, history) => async (dispatch) => {
	//#TODO create new FormData to able to send file into DB
	const data = new FormData();
	data.append('file', JSON.stringify(values.hotel_images));
	const newValues = {
		...values,
		hotel_images: data
	};

	// for (let key in values ) {
	// 	console.log(values);
	// 	form_data.append(key, values[key]);
	// }

	//const config = {headers: {'Content-Type': 'multipart/form-data'}};
	const res = await axios.post('/api/hotels', newValues);
	//const res = await axios.post('/api/hotels', values);
	console.log(newValues);
	history.push('/add/success');
	dispatch({
		type: types.SUBMIT_SURVEY,
		payload: res.data.createdHotel
	});
};

export const addHotel = (values) => ({
	type: types.ADD_HOTEL,
	payload: values
});