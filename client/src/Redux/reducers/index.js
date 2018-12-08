import {combineReducers} from "redux";
import fetchHotelsReducers from "./fetchHotelsReducers";
import currentUserAuth from "./currentUserAuthReducers";
import hotelSearchReducers from "./hotelSearchReducers";
import switchViewReducers from "./switchViewReducers";
import fetchHotelsNumber from "./getHotelsLengthReducers";
import {reducer as reduxForm} from "redux-form";
import submitHotel from "./submitHotelReducers";

export default combineReducers({
	currentUserAuth: currentUserAuth,
	hotelsList: fetchHotelsReducers,
	filterHotels: hotelSearchReducers,
	viewTypeId: switchViewReducers,
	hotelsNumberInDatabase: fetchHotelsNumber,
	form: reduxForm,
	submitHotel
});
