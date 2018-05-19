import React from 'react';
import {NavLink} from 'react-router-dom';

const HotelLink = (data) => (
	<div className="hotel__details--name">
		<NavLink to={"/hotel/" + data.id} className="hotel__link">{data.hotelName}</NavLink>
		<div className="hotel__details--adressBox">
			<span className="hotel__details--adress">{data.hotelAdress}</span>
			<p className="hotel__details--distance">(<span className="hotel__details--distanceValue">{data.hotelDistance}</span> km from center)</p>
		</div>
	</div>
);

export default HotelLink;