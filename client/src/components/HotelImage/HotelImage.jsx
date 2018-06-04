// @flow
import React from 'react';

type Props = {
	onClick: Function,
	image: Array<string>
}

const HotelImage = (data: Props) => <img onClick={data.onClick} className="hotel__image" src={data.image[0]} alt="xyz"/>;

export default HotelImage;