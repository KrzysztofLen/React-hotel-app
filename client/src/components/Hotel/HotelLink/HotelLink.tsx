import React from 'react';
import {NavLink} from 'react-router-dom';

interface IProps {
	id: number,
	hotelName: string
}

const HotelLink = (data: IProps) => (
	<div className="hotel__name">
		<NavLink to={"/hotel/" + data.id} className="hotel__link">{data.hotelName}</NavLink>
	</div>
);

export default HotelLink;