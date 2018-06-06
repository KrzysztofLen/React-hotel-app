import {combineReducers} from 'redux';
import getHotelReducers from './getHotelReducers';
import authReducers from './authReducers';
import hotelSearchReducers from './hotelSearchReducers';

export default combineReducers({
	auth: authReducers,
	hotels: getHotelReducers,
	search: hotelSearchReducers
});