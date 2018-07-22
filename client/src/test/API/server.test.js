const request = require('supertest');
const app = require('./../../../../server');

describe('GET/ hotels', () => {
	let expectedProps = ["_id", "facilities_card_payment", "facilities_game_room", "facilities_gym", "facilities_restaurant", "facilities_wifi", "hotel_adress", "hotel_city", "hotel_description", "hotel_distance", "hotel_images", "hotel_name", "hotel_price", "hotel_province", "hotel_rating", "hotel_reviews", "hotel_stars", "id", "is_apartment", "is_new"];

	test('should return JSON array', () => {
		return request(app).get('/api/hotels')
			.expect(200)
			.then(res => {
				expect(res.body.hotels).toBeInstanceOf(Array);
			});
	});
	test('should get all hotels', () => {
		return request(app).get('/api/hotels')
			.expect(200)
			.then((res) => {
				expect(res.body.hotels.length).toBe(13);
			});
	});

	test('should return hotels with correct properties', () => {
		return request(app).get('/api/hotels')
			.expect(200)
			.then((res) => {
				let sampleKeys = Object.keys(res.body.hotels[0]);
				expectedProps.forEach((key) => {
					expect(sampleKeys.includes(key)).toBe(true);
				});
			});
	});
});
