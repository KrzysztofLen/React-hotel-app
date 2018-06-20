import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

// Components
import Rating from "../External/Rating/Rating";
import AddHotelForm from "./AddHotelForm";

class AddHotel extends Component {

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="content">
						<h1>This is from AddHotel</h1>
						<AddHotelForm/>
						<Rating />
					</div>
				</div>
			</React.Fragment>
		)
	}
};

export default reduxForm({
	form: 'addHotelForm'
})(AddHotel);