import axios from 'axios';
import {FETCH_HOTELS} from './types';

export const fetchHotels = () => async(dispatch) => {
	const res = await axios.get('/hotels');
	dispatch({
		type: FETCH_HOTELS,
		payload: res.data
	});
};