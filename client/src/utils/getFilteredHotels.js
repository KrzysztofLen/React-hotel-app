export const getFilteredHotels = (hotels, text) => {
	const hotelsSearch = text.toLowerCase();

	return hotels.filter(({hotel_name}) => hotel_name.toLowerCase().includes(hotelsSearch));
};