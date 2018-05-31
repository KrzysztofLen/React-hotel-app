import {combineReducers} from 'redux';
import getHotelReducers from './getHotelReducers';
import authReducers from './authReducers';

export default combineReducers({
	auth: authReducers,
	hotels: getHotelReducers
});