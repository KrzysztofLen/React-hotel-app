import getHotelsLengthReducers, {HOTELS_LENGTH} from "./../../../Redux/reducers/getHotelsLengthReducers";

it("handles actions of type HOTELS_LENGTH", () => {
	const action = {
		type: HOTELS_LENGTH,
		payload: 10
	};

	const newState = getHotelsLengthReducers([], action);
	expect(newState).toEqual(10);
});

it("handles actions of unknown type", () => {
	const newState = getHotelsLengthReducers([], {});
	expect(newState).toEqual([]);
});