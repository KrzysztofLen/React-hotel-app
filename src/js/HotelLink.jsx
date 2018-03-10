import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const HotelLink = (data) => <NavLink to={"/question/" + data.id} className="question">{data.hotelName}</NavLink>;

export default HotelLink;