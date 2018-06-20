import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class AddHotelForm extends Component {

	render() {
		return (
			<React.Fragment>
				<form action="">
					<Field type="text" name="test" component="input"/>
				</form>
			</React.Fragment>
		)
	}
};

export default AddHotelForm;