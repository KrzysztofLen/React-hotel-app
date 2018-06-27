import {combineReducers} from "redux";
import getHotelReducers from "./getHotelReducers";
import authReducers from "./authReducers";
import {hotelsSearch} from "./hotelSearchReducers";
import {viewSwitch} from "./switchViewReducers";
import fetchHotelsLength from "./getHotelsLengthReducers";
import {reducer as reduxForm} from "redux-form";
import submitHotel from "./submitHotelReducers";

export default combineReducers({
	auth: authReducers,
	hotels: getHotelReducers,
	hotelsSearch,
	viewSwitch,
	length: fetchHotelsLength,
	form: reduxForm,
	submitHotel
});
