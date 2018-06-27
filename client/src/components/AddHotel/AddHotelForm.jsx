import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

// Components
import Rating from "../External/Rating/Rating";
import AddHotelField from "./AddHotelField";
import FIELDS from './formFields';
import AddHotelNumberField from "./AddHotelNumberField";
import AddHotelOptionField from "./AddHotelOptionField";

const NUMBER_FIELDS = [
	{ label: 'Hotel price', name: 'hotel_price' },
	{ label: 'Hotel distance (from center)', name: 'hotel_distance' },
	{ label: 'Hotel stars (max 5)', name: 'hotel_stars' },
	{ label: 'Hotel rating', name: 'hotel_rating' },
	{ label: 'Hotel reviews', name: 'hotel_reviews' }
];

const BOOLEAN_FIELDS = [
	{ label: 'Is new?', name: 'is_new' },
	{ label: 'Is apartment?', name: 'is_apartment' },
	{ label: 'Restaurant?', name: 'facilities_restaurant' },
	{ label: 'Gym?', name: 'facilities_gym' },
	{ label: 'Wifi?', name: 'facilities_wifi' },
	{ label: 'Card payment?', name: 'facilities_card_payment' },
	{ label: 'Game room?', name: 'facilities_game_room' }
];

class AddHotelForm extends Component {
	renderFields() {
		return (
			<React.Fragment>
				{FIELDS.map(({label, name}, i) => {
					return (
						<Field key={i} label={label} type="text" name={name} component={AddHotelField}/>
					)
				})}
				{NUMBER_FIELDS.map(({label, name}, i) => {
					return (
						<Field key={i} label={label} type="number" name={name} component={AddHotelNumberField} />
					)
				})}
				{BOOLEAN_FIELDS.map(({label, name}, i) => {
					return (
						<Field key={i} label={label} type="select" name={name} component={AddHotelOptionField} />
					)
				})}
			</React.Fragment>
		)
	}

	render() {
		return (
			<React.Fragment>
				<div className="container form-style-6">
					<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{/*<form onSubmit={this.testSending}>*/}
						{this.renderFields()}
						<Link to="/" className="">Cancel</Link>
						<button type="submit" className="">Next</button>
					</form>
				</div>
			</React.Fragment>
		)
	}
}

export default reduxForm({
	form: 'addHotelForm'
})(AddHotelForm);