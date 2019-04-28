import axios from 'axios';
import * as types from "../../types";

//******* HOTEL *********//
export const fetchHotels = () => async (dispatch) => {
	function onSuccess(success) {
		dispatch({
			type: types.FETCH_HOTELS,
			payload: success
		});
		return success;
	}

	try {
		const response = await axios.get('/api/hotels');
		return onSuccess(response.data.hotels);
	} catch (e) {
		dispatch(systemError(e));
	}
};

export const searchHotels = (text) => ({
	type: types.SEARCH_HOTELS,
	text
});

export const fetchHotelsLength = () => async (dispatch) => {
	function onSuccess(success) {
		dispatch({
			type: types.HOTELS_LENGTH,
			payload: success
		});
		return success;
	}
	try {
		const response = await axios.get('/api/count');
		return onSuccess(response.data.result);
	} catch (e) {
		dispatch(systemError(e));
	}
};

export const addHotel = (values) => ({
	type: types.ADD_HOTEL,
	payload: values
});

export const deleteHotel = (id) => async (dispatch) => {
	if (id === 0) {
		dispatch({
			type: types.DELETE_HOTEL,
			payload: false
		});
	} else {
		try {
			const res = await axios.delete(`/api/hotels/${id}`);
			dispatch({
				type: types.DELETE_HOTEL,
				payload: res.data
			});
		} catch (e) {
			dispatch(systemError(e));
		}
	}
}

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
		dispatch(systemError('Email is in use'));
	}
};

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
		dispatch(systemError("Invalid credentials"));
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
	const response = await axios.get('/api/current_user');

	dispatch({
		type: types.FETCH_USER,
		payload: response.data
	});
};

export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post('/api/stripe', token);
	dispatch({
		type: types.FETCH_CREDITS,
		payload: res.data
	});
};


export const submitSurvey = (values, history) => async (dispatch) => {
	console.log(values);

	const formData = new FormData();

	if (typeof values.hotel_images !== 'string' && values.hotel_images !== null) {
		formData.append('hotel_images', values.hotel_images[0]);
	}

	const data = {
		...values,
		hotel_images: formData
	};

	console.log(data);
	const res = await axios.post('/api/hotels', data);
	//const res = await axios.post('/api/hotels', values);

	console.log("AC:", res);
	history.push('/add/success');

	// dispatch({
	// 	type: types.SUBMIT_SURVEY,
	// 	payload: res.data.createdHotel
	// });
};


//******* SYSTEM *********//
export const systemError = (error) => {
	return {
		type: types.ERROR,
		payload: error
	}
};

export const switchView = (id) => ({
	type: types.SWITCH_VIEW,
	id
});