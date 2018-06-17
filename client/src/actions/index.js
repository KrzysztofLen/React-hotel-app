import axios from 'axios';

export const fetchHotels = () => async(dispatch) => {
	const res = await axios.get('/hotels');
	dispatch({
		type: 'FETCH_HOTELS',
		payload: res.data.hotels
	});
};

export const fetchUser = () => async(dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({
		type: 'FETCH_USER',
		payload: res.data
	});
};

export const searchHotels = (text) => ({
	type: 'SEARCH_HOTELS',
	text
});

export const switchView = (id) => ({
	type: 'SWITCH_VIEW',
	id
});

export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post('/api/stripe', token);
	dispatch({
		type: 'FETCH_USER',
		payload: res.data
	});
};

export const fetchHotelsLength = () => async(dispatch) => {
	const res = await axios.get('/count');
	dispatch({
		type: 'HOTELS_LENGTH',
		payload: res.data
	});
};