import React from 'react';

const HotelDescription = ({description}) => (
	<div className="hotel__details--description">
		<p className="hotel__details--text">{description}</p>
	</div>
);

export default HotelDescription;