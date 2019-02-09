import {combineReducers} from "redux";
import fetchHotels from "./fetchHotelsReducers";
import currentUserAuth from "./currentUserAuthReducers";
import hotelSearch from "./hotelSearchReducers";
import switchView from "./switchViewReducers";
import fetchHotelsNumber from "./getHotelsLengthReducers";
import authUser from "./authUserReducers";
import submitHotel from "./submitHotelReducers";
import addHotelForm from "./addHotelFormReducers";
import {reducer as reduxForm} from "redux-form";

export default combineReducers({
	currentUserAuth: currentUserAuth,
	authUser: authUser,
	hotelsList: fetchHotels,
	filterHotels: hotelSearch,
	viewTypeId: switchView,
	hotelsNumberInDatabase: fetchHotelsNumber,
	addHotelFormValues: addHotelForm,
	form: reduxForm, //TODO reduxForm use in auth system
	submitHotel
});
