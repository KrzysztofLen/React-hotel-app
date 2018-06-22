import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

// Components
import Rating from "../External/Rating/Rating";
import AddHotelField from "./AddHotelField";
import FIELDS from './formFields';

class AddHotelForm extends Component {
	renderFields() {
		return (
			<React.Fragment>
				{FIELDS.map(({label, name}, i) => {
					return (
						<Field key={i} label={label} type="text" name={name} component={AddHotelField}/>
					)
				})}
			</React.Fragment>
		)
	}

	render() {
		return (
			<React.Fragment>
				<div className="container form-style-6">
					<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
						{this.renderFields()}
						<Link to="/" className="" >Cancel</Link>
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