import React from 'react';
import {connect} from 'react-redux';
import {FIELDS, NUMBER_FIELDS, BOOLEAN_FIELDS} from './formFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';


const AddHotelReview = ({ onCancel, formValues, submitSurvey, history}) => {

	const reviewFields = FIELDS.map(({name, label}, i) => {
		return (
			<div key={i} className="hotel-form__values">
				<label>{label}</label>
				<div className="hotel-form__value">{formValues[name]}</div>
			</div>
		)
	});

	const reviewFields1 = NUMBER_FIELDS.map(({name, label}, i) => {
		return (
			<div key={i} className="hotel-form__values">
				<label>{label}</label>
				<div className="hotel-form__value">{formValues[name]}</div>
			</div>
		)
	});

	const reviewFields2 = BOOLEAN_FIELDS.map(({name, label}, i) => {
		return (
			<div key={i} className="hotel-form__values">
				<label>{label}</label>
				<div className="hotel-form__value">{formValues[name]}</div>
			</div>
		)
	});

	return (
		<div className="hotel-form__review">
			<h5 className="hotel-form__header">Please confirm your entries</h5>
			{reviewFields}
			{reviewFields1}
			{reviewFields2}
			<button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>Back</button>
			<button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>Send</button>
		</div>
	)
};

function mapStateToProps(state) {
	console.log(state);
	return {
		formValues: state.form.addHotelForm.values
	}
}

export default connect(mapStateToProps, actions)(withRouter(AddHotelReview));