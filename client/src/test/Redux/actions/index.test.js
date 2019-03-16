import {fetchHotelsLength} from "../../../Redux/actions";
import * as types from "../../../Redux/types";

describe.skip("Get hotels length", () => {
	test("has the correct type", () => {
		const action = fetchHotelsLength();
		console.log(action);
		expect(action.types).toEqual(types.HOTELS_LENGTH);
	});

	test("has the correct payload", async () => {
		const action = await fetchHotelsLength(20);
		expect(action.payload).toEqual(20);
	});
});

