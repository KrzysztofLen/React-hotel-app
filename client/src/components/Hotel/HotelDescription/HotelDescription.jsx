import React from 'react';

const HotelDescription = (data) => (
	<div className="hotel__details--description">
		<p className="hotel__details--text">{data.description}</p>
	</div>
);

export default HotelDescription;