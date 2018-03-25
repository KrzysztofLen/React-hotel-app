import React from 'react';
import {NavLink} from 'react-router-dom';

const HotelLink = (data) => (
	<div className="hotel__details--name">
		<NavLink to={"/hotel/" + data.id} className="hotel__link">{data.hotelName}</NavLink>
	</div>
);

export default HotelLink;