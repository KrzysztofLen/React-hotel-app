import {combineReducers} from 'redux';
import getHotelReducers from './getHotelReducers';
import authReducers from './authReducers';
import {hotelsSearch} from './hotelSearchReducers';
import {viewSwitch} from "./switchViewReducers";
import fetchHotelsLength from "./getHotelsLengthReducers";

export default combineReducers({
	auth: authReducers,
	hotels: getHotelReducers,
	hotelsSearch,
	viewSwitch,
	length: fetchHotelsLength
});