import React from 'react';
import {NavLink} from 'react-router-dom';

const HotelLink = (data) => <NavLink to={"/hotel/" + data.id} className="hotel__link">{data.hotelName}</NavLink>;

export default HotelLink;