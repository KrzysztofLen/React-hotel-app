// @flow
import * as React from 'react';

type Props = {
	onClick: Function,
	image: Array<string>
}

const HotelImage = (data: Props) => (
	<React.Fragment>
		<div className="overlay" onClick={data.onClick}>
			<span className="overlay__text">Click</span>
		</div>
		<img className="hotel__image" src={data.image[0]} alt="xyz"/>;
	</React.Fragment>
);

export default HotelImage;