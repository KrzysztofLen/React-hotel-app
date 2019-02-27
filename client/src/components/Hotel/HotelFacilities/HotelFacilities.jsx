import React from 'react';

import visa from '../../../assets/SVG/cc-visa.svg';
import cutlery from '../../../assets/SVG/cutlery.svg';
import gamepad from '../../../assets/SVG/gamepad.svg';
import heartbeat from '../../../assets/SVG/heartbeat.svg';
import wifi from '../../../assets/SVG/wifi.svg';

class HotelFacilities extends React.Component {
	render() {
		return (
			<div className="facilities">
				<span className="facilities__header">Facilities: </span>
				<div className="facilities__container">
					{this.props.facilities_card_payment ? <img className="facilities__icon" src={visa} alt="visa" /> : null}
					{this.props.facilities_restaurant ? <img className="facilities__icon" src={cutlery} alt="cutlery" /> : null}
					{this.props.facilities_gym ? <img className="facilities__icon" src={heartbeat} alt="heartbeat" /> : null}
					{this.props.facilities_wifi ? <img className="facilities__icon" src={wifi} alt="wifi" /> : null}
					{this.props.facilities_game_room ? <img className="facilities__icon" src={gamepad} alt="gamepad" /> : null}
				</div>
			</div>
		)
	}
}

export default HotelFacilities;