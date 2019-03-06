import React from 'react';

import visa from '../../../assets/SVG/cc-visa.svg';
import cutlery from '../../../assets/SVG/cutlery.svg';
import gamepad from '../../../assets/SVG/gamepad.svg';
import heartbeat from '../../../assets/SVG/heartbeat.svg';
import wifi from '../../../assets/SVG/wifi.svg';

const HotelFacilities = (props) => (
	<div className="facilities">
		<span className="facilities__header">Facilities: </span>
		<div className="facilities__container">
			{props.facilities_card_payment && <img className="facilities__icon" src={visa} alt="visa"/>}
			{props.facilities_restaurant && <img className="facilities__icon" src={cutlery} alt="cutlery"/>}
			{props.facilities_gym && <img className="facilities__icon" src={heartbeat} alt="heartbeat"/>}
			{props.facilities_wifi && <img className="facilities__icon" src={wifi} alt="wifi"/>}
			{props.facilities_game_room && <img className="facilities__icon" src={gamepad} alt="gamepad"/>}
		</div>
	</div>
);

export default HotelFacilities;