import React, {Component} from 'react';
import AddHotelForm from "./AddHotelForm";
import {reduxForm} from 'redux-form';


class AddHotelNew extends Component {
	render() {
		return (
			<React.Fragment>
				<AddHotelForm/>
			</React.Fragment>
		)
	}
}

export default AddHotelNew;