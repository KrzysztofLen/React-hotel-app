import * as types from "../../types";

const INITIAL_STATE = {
	hotel_name: "",
	hotel_adress: "",
	hotel_city: "",
	hotel_province: "",
	hotel_description: "",
	hotel_price: null,
	hotel_distance: null,
	hotel_stars: null,
	hotel_rating: null,
	hotel_reviews: null,
	is_new: false,
	is_apartment: false,
	facilities_restaurant: false,
	facilities_gym: false,
	facilities_wifi: false,
	facilities_card_payment: false,
	facilities_game_room: false,
	hotel_images: []
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.ADD_HOTEL:
			return action.payload;
		default:
			return state;
	}
}