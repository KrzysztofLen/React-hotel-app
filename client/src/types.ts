// REDUX ACTIONS
export const HOTELS_LENGTH: string = 'HOTELS_LENGTH';
export const DELETE_HOTEL: string = 'DELETE_HOTEL';
export const FETCH_HOTELS: string = 'FETCH_HOTELS';
export const FETCH_USER: string = 'FETCH_USER';
export const SEARCH_HOTELS: string = 'SEARCH_HOTELS';
export const SWITCH_VIEW: string = 'SWITCH_VIEW';
export const FETCH_CREDITS: string = 'FETCH_CREDITS';
export const SUBMIT_SURVEY: string = 'SUBMIT_SURVEY';
export const AUTH_USER: string = 'AUTH_USER';
export const AUTH_ERROR: string = 'AUTH_ERROR';
export const ADD_HOTEL: string = 'ADD_HOTEL';
export const ERROR: string = 'ERROR';

// ENTRIES API URL'S

// GLOBAL INTERFACE
export interface IHotel {
    _id: number,
	hotel_name: string,
	hotel_adress: string,
	hotel_city: string,
	hotel_province: string,
	hotel_price: number,
	hotel_distance: number,
	hotel_description: string,
	hotel_stars: number,
	hotel_rating: number,
	hotel_reviews: number,
	is_new: any,
	is_apartment: boolean,
	facilities_restaurant: boolean,
	facilities_gym: boolean,
	facilities_wifi: boolean,
	facilities_card_payment: boolean,
	facilities_game_room: boolean,
    hotel_images?: Array<string>
}

//HOTEL ID'S INDELIBLE
export const INDELIBLE_HOTELS  = [
	"5afefa8d4d9bdc2998768cd2",
	"5afefb284d9bdc2998768cd3",
	"5afefbb14d9bdc2998768cd4",
	"5afefc6a4d9bdc2998768cd5",
	"5afefd194d9bdc2998768cd6",
	"5afefda94d9bdc2998768cd7",
	"5afefe464d9bdc2998768cd8",
	"5afefeca4d9bdc2998768cd9",
	"5afeff844d9bdc2998768cda",
	"5b1b76d47ca1c85548f63e42",
	"5b26605576945c16185d31ed",
	"5b33eca11266bf40ccdd69e2",
	"5b35430236b8ac0a3c4a7ed8"
];