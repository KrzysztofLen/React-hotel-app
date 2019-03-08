import React from 'react';

const HotelPrice = (props) => (
	<React.Fragment>
		<p className="hotel__price"><span>&#36;</span>{props.price}</p>
	</React.Fragment>
);

export default HotelPrice;