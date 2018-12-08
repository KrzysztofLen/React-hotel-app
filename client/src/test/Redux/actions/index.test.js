import {fetchHotelsLength} from "../../../Redux/actions";
import * as types from "../../../Redux/types";

describe("Get hotels length", () => {
	it("has the correct type", async() => {
		const action = await fetchHotelsLength();
		console.log(action);
		expect(action.types).toEqual(types.HOTELS_LENGTH);
	});

	it("has the correct payload", () => {
		const action = fetchHotelsLength(20);
		expect(action.payload).toEqual(20);
	});
});

