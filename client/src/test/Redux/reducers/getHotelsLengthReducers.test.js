import getHotelsLengthReducers, {HOTELS_LENGTH} from "./../../../Redux/reducers/getHotelsLengthReducers";

test.skip("handles actions of type HOTELS_LENGTH", () => {
	const action = {
		type: HOTELS_LENGTH,
		payload: 10
	};

	const newState = getHotelsLengthReducers([], action);
	expect(newState).toEqual(10);
});

test.skip("handles actions of unknown type", () => {
	const newState = getHotelsLengthReducers([], {});
	expect(newState).toEqual([]);
});