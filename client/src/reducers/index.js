import {combineReducers} from 'redux';
import getHotelReducers from './getHotelReducers';
import authReducers from './authReducers';
import {hotelsSearch} from './hotelSearchReducers';

export default combineReducers({
	auth: authReducers,
	hotels: getHotelReducers,
	hotelsSearch
});