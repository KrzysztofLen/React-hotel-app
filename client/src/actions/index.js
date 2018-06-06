import axios from 'axios';
import {FETCH_HOTELS} from './types';
import {FETCH_USER} from './types';
import {SEARCH_HOTELS} from './types';

export const fetchHotels = () => async(dispatch) => {
	const res = await axios.get('/hotels');
	dispatch({
		type: FETCH_HOTELS,
		payload: res.data
	});
};

export const fetchUser = () => async(dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

export const searchHotels = (text) => ({
	type: SEARCH_HOTELS,
	text
});