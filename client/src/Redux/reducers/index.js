import {combineReducers} from "redux";
import getHotelReducers from "./getHotelReducers";
import authReducers from "./authReducers";
import {hotelsSearch} from "./hotelSearchReducers";
import {viewSwitch} from "./switchViewReducers";
import fetchHotelsNumber from "./getHotelsLengthReducers";
import {reducer as reduxForm} from "redux-form";
import submitHotel from "./submitHotelReducers";

export default combineReducers({
	auth: authReducers,
	hotels: getHotelReducers,
	hotelsSearch,
	viewSwitch,
	hotelsNumberInDatabase: fetchHotelsNumber,
	form: reduxForm,
	submitHotel
});
