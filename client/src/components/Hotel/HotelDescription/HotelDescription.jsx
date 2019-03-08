import React from 'react';

const HotelDescription = ({description}) => (
	<div className="hotel__description">
		<p className="hotel__description--text">{description}</p>
	</div>
);

export default HotelDescription;