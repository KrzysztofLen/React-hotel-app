import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

// Components
import AddHotelField from "./AddHotelField";
import {TEXT_FIELDS, NUMBER_FIELDS, BOOLEAN_FIELDS} from './formFields';
import AddHotelNumberField from "./AddHotelNumberField";
import AddHotelOptionField from "./AddHotelOptionField";
import FileInput from "./FileInput";
import ToggleSwitch from "../External/ToggleSwitch/ToggleSwitch";

class AddHotelForm extends Component {
	renderFields() {
		return (
			<React.Fragment>
				<div className="hotel-form__formValueBox">
					{TEXT_FIELDS.map(({label, name}, i) => {
						return (
							<Field key={i} label={label} type="text" name={name} component={AddHotelField}/>
						)
					})}
				</div>
				<div className="hotel-form__formValueBox">
					{NUMBER_FIELDS.map(({label, name}, i) => {
						return (
							<Field key={i} label={label} type="number" name={name} component={AddHotelNumberField}/>
						)
					})}
				</div>
				<div className="hotel-form__formValueBox">
					{/*<Field key={i} label={label} type="select" name={name} component={AddHotelOptionField}/>*/}
					{BOOLEAN_FIELDS.map(({label, name}, i) => {
						return (
							<ToggleSwitch theme={"default"} className={"d-flex"} label={label}/>
						)
					})}
				</div>
				<Field type="file" name="hotel_images" component={FileInput} />
			</React.Fragment>
		)
	}

	render() {
		console.log(this.props);
		return (
			<div className={"hotel-form"}>
				<div className="hotel-form__container">
					<h5 className="hotel-form__header">Fill to submit</h5>
					<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} className="hotel-form__form"
					      encType="multipart/form-data"
					      method="post">
						<div className="hotel-form__formValuesBox">
							{this.renderFields()}
						</div>
						<div className="hotel-form__buttons">
							<Link to="/" className="button is-danger">Cancel</Link>
							<button type="submit" className="button is-info">Next</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

function validate(values) {
	const errors = {};

	TEXT_FIELDS.forEach(({name}) => {
		if (!values[name]) {
			errors[name] = 'FAILURE! You must provide a value';
		}
	});

	NUMBER_FIELDS.forEach(({name}) => {
		if (!values[name]) {
			errors[name] = 'FAILURE! You must provide a value';
		}
	});

	BOOLEAN_FIELDS.forEach(({name}) => {
		if (!values[name]) {
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