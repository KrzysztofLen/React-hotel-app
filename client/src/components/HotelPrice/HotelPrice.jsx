import React from 'react';

const HotelPrice = (props) => (
	<div className="hotel__details--price">
		<p className="hotel__details--priceValue"><span>&#36;</span>{props.price}</p>
	</div>
);

export default HotelPrice;