import {combineReducers} from 'redux';
import getHotelReducers from './getHotelReducers';
import authReducers from './authReducers';
import {hotelsSearch} from './hotelSearchReducers';
import {viewSwitch} from "./switchViewReducers";

export default combineReducers({
	auth: authReducers,
	hotels: getHotelReducers,
	hotelsSearch,
	viewSwitch
});