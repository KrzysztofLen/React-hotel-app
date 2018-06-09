export const getFilteredHotels = (hotels, text) => {
	const hotelsSearch = text.toLowerCase();

	return hotels.filter(hotel => {
		const name = hotel.hotel_name;

		return (
			name.toLowerCase().includes(hotelsSearch)
		);
	});
};