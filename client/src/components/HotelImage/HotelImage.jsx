import React from 'react';

const HotelImage = (data) => <img onClick={data.onClick} className="hotel__image" src={data.image[0]} alt="xyz"/>;

export default HotelImage;