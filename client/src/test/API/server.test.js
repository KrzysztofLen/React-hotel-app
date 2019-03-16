const request = require('supertest');
const app = require('./../../../../server');

describe('GET/ hotels', () => {
	let expectedProps = ["_id", "facilities_card_payment", "facilities_game_room", "facilities_gym", "facilities_restaurant", "facilities_wifi", "hotel_adress", "hotel_city", "hotel_description", "hotel_distance", "hotel_images", "hotel_name", "hotel_price", "hotel_province", "hotel_rating", "hotel_reviews", "hotel_stars", "id", "is_apartment", "is_new"];

	test.skip('should return JSON array', (done) => {
		return request(app).get('/api/hotels')
			.expect(200)
			.then((res) => {
				expect(res.body.hotels).toBeInstanceOf(Array);
				done();
			});
	});
	test.skip('should get all hotels', (done) => {
		return request(app).get('/api/hotels')
			.expect(200)
			.then((res) => {
				expect(res.body.hotels.length).toBe(13);
				done();
			});
	});

	test.skip('should return hotels with correct properties', (done) => {
		return request(app).get('/api/hotels')
			.expect(200)
			.then((res) => {
				let sampleKeys = Object.keys(res.body.hotels[0]);
				expectedProps.forEach((key) => {
					expect(sampleKeys.includes(key)).toBe(true);
					done();
				});
			});
	});

	test.skip('should return 404 for non-objects ids', () => {
		return request(app).get('/api/hotels/123abc')
			.expect(404)
			.then((res) => {
				expect(res.status).toBe(404);
			});
	});

	test.skip('should return 200 for correct hotel id', () => {
		return request(app).get('/api/hotels/5afefa8d4d9bdc2998768cd2')
			.expect(200)
			.then((res) => {
				expect(res.status).toBe(200);
			});
	});
});
