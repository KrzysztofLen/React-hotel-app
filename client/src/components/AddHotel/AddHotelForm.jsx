import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

// Components
import Rating from "../External/Rating/Rating";
import AddHotelField from "./AddHotelField";
import {FIELDS, NUMBER_FIELDS, BOOLEAN_FIELDS} from './formFields';
import AddHotelNumberField from "./AddHotelNumberField";
import AddHotelOptionField from "./AddHotelOptionField";

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
						<div className="form__buttons">
							<Link to="/" className="btn btn--cancel">Cancel</Link>
							<button type="submit" className="btn btn--next">Next</button>
						</div>
					</form>
				</div>
			</React.Fragment>
		)
	}
}

function validate(values) {
	const errors = {};

	FIELDS.forEach(({name}) => {
		if(!values[name]) {
			errors[name] = 'FAILURE! You must provide a value';
		}
	});

	NUMBER_FIELDS.forEach(({name}) => {
		if(!values[name]) {
			errors[name] = 'FAILURE! You must provide a value';
		}
	});

	BOOLEAN_FIELDS.forEach(({name}) => {
		if(!values[name]) {
			errors[name] = 'FAILURE! You must select a value';
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'addHotelForm',
	destroyOnUnmount: false // prevent cleaning form
})(AddHotelForm);