import React from 'react';

import visa from '../../../assets/SVG/cc-visa.svg';
import cutlery from '../../../assets/SVG/cutlery.svg';
import gamepad from '../../../assets/SVG/gamepad.svg';
import heartbeat from '../../../assets/SVG/heartbeat.svg';
import wifi from '../../../assets/SVG/wifi.svg';

const renderImage = (image, alt) => (
	<img className="facilities__icon" src={image} alt={alt}/>
);

const renderImageWithDescription = (image, alt, description) => (
	<React.Fragment>
		<div className={"facilities__wrapper"}>
			{renderImage(image, alt)}
			<p>{description}</p>
		</div>
	</React.Fragment>
);

const HotelFacilities = (props) => (
	<div className="facilities">
		<span className="facilities__header">Facilities: </span>
		<div className="facilities__container">
			{(props.facilities_card_payment && props.withDescription) ?
				renderImageWithDescription(visa, "visa", "Card payment") : props.facilities_card_payment && renderImage(visa, "visa")}
			{(props.facilities_restaurant && props.withDescription) ?
				renderImageWithDescription(cutlery, "cutlery", "Restaurant") : props.facilities_restaurant && renderImage(cutlery, "cutlery")}
			{(props.facilities_gym && props.withDescription) ?
				renderImageWithDescription(heartbeat, "heartbeat", "Gym") : props.facilities_gym && renderImage(heartbeat, "heartbeat")}
			{(props.facilities_wifi && props.withDescription) ?
				renderImageWithDescription(wifi, "wifi", "Wi-Fi") : props.facilities_wifi && renderImage(wifi, "wifi")}
			{(props.facilities_game_room && props.withDescription) ?
				renderImageWithDescription(gamepad, "gamepad", "Game room") : props.facilities_game_room && renderImage(gamepad, "gamepad")}
		</div>
	</div>
);

export default HotelFacilities;