import {combineReducers} from 'redux';
import getHotelReducers from './getHotelReducers';

export default combineReducers({
	hotels: getHotelReducers
});