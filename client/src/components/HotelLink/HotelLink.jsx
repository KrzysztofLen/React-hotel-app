// @flow
import React from 'react';
import {NavLink} from 'react-router-dom';

type Props = {
	id: number,
	hotelName: string
}

const HotelLink = (data: Props) => (
	<div className="hotel__details--name">
		<NavLink to={"/hotel/" + data.id} className="hotel__link">{data.hotelName}</NavLink>
	</div>
);

export default HotelLink;