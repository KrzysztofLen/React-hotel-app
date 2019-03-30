import * as React from 'react';
import noImage from '../../../assets/img/No_Image_Available.jpg';

interface IProps {
	onClick: () => void,
	image: Array<string> | undefined
}

const HotelImage = (data: IProps) => {
	return (<React.Fragment>
		<div className="overlay" onClick={data.onClick}>
			<span className="overlay__text">Click</span>
		</div>
		{(data.image == null) ? <img src={noImage} alt="zyx" /> : <img className="hotel__image" src={data.image[0]} alt="xyz" />}
	</React.Fragment>
	)
};

export default HotelImage;