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
  _id: number;
  hotel_name: string;
  hotel_adress: string;
  hotel_city: string;
  hotel_province: string;
  hotel_price: number;
  hotel_distance: number;
  hotel_description: string;
  hotel_stars: number;
  hotel_rating: number;
  hotel_reviews: number;
  is_new: any;
  is_apartment: boolean;
  facilities_restaurant: boolean;
  facilities_gym: boolean;
  facilities_wifi: boolean;
  facilities_card_payment: boolean;
  facilities_game_room: boolean;
  hotel_images?: Array<string>;
}
