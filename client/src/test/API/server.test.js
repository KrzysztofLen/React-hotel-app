const request = require('supertest');
const app = require('./../../../../App.js');

let hotelID = null;

beforeAll(async() => {
	const res = await request(app).get('/api/hotels').expect(200);
	hotelID = res.body.hotels[1]._id;
});

describe('GET/ hotels', () => {
	let expectedProps = ["_id", "facilities_card_payment", "facilities_game_room", "facilities_gym", "facilities_restaurant", "facilities_wifi", "hotel_adress", "hotel_city", "hotel_description", "hotel_distance", "hotel_images", "hotel_name", "hotel_price", "hotel_province", "hotel_rating", "hotel_reviews", "hotel_stars", "id", "is_apartment", "is_new"];

	test('should return JSON array', async () => {
		const res = await request(app).get('/api/hotels').expect(200);
		expect(res.body.hotels).toBeInstanceOf(Array);
	});

	test('should get all hotels', async () => {
		const res = await request(app).get('/api/hotels').expect(200);
		expect(res.body.hotels.length).toBeGreaterThan(0);
	});

	test('should return hotels with correct properties', async() => {
		const res = await request(app).get('/api/hotels').expect(200);
		let hotelKeys = Object.keys(res.body.hotels[0]);

		expectedProps.forEach((key) => {
			expect(hotelKeys.includes(key)).toBe(true);
		});
	});
});

describe("GET/ hotels/:id", () => {
	test('should return 404 for non-objects ids', async() => {
		const res = await request(app).get('/api/hotels/123abc').expect(404);
		expect(res.status).toBe(404);
	});

	test('should return 200 for correct hotel id', async() => {
		const res = await request(app).get(`/api/hotels/${hotelID}`).expect(200);
		expect(res.body.hotel).not.toBeNull();
	});
});
