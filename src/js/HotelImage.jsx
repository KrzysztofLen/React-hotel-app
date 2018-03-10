import React, {Component} from 'react';

const HotelImage = (data) => <img onClick={data.onClick} className="hotel__image" src={data.image} alt="xyz"/>;

export default HotelImage;