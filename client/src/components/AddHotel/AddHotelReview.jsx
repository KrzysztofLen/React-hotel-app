import React from 'react';
import {connect} from 'react-redux';
import {FIELDS, NUMBER_FIELDS, BOOLEAN_FIELDS} from './formFields';
import {Link, withRouter} from 'react-router-dom';
import * as actions from '../../Redux/actions';
import send from "../../assets/paper-plane.svg";

const AddHotelReview = ({onCancel, formValues, submitSurvey, history}) => {

	// const reviewFields = FIELDS.map(({name, label}, i) => {
	// 	return (
	// 		<div key={i} className="hotel-form__values">
	// 			<label>{label}</label>
	// 			<div className="hotel-form__value">{formValues[name]}</div>
	// 		</div>
	// 	)
	// });
	//
	// const reviewFields1 = NUMBER_FIELDS.map(({name, label}, i) => {
	// 	return (
	// 		<div key={i} className="hotel-form__values">
	// 			<label>{label}</label>
	// 			<div className="hotel-form__value">{formValues[name]}</div>
	// 		</div>
	// 	)
	// });
	//
	const reviewFields2 = BOOLEAN_FIELDS.map(({name, label}, i) => {
		console.log(formValues[name]);
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
			<div className="hotel-form__valuesBox">
				{/*<div className="hotel-form__valueBox">*/}
					{/*{reviewFields}*/}
				{/*</div>*/}
				{/*<div className="hotel-form__valueBox">*/}
					{/*{reviewFields1}*/}
				{/*</div>*/}
				<div className="hotel-form__valueBox">
					{reviewFields2}
				</div>
			</div>
			<button className="button is-warning" onClick={onCancel}>Back</button>
			<div className="hotel-form__send" onClick={() => submitSurvey(formValues, history)}>
				<img className="hotel-form__sendIcon" src={send} alt=""/>
				Send
			</div>
			<Link to="/" className="hotel-form__close" onClick={onCancel}>&#x2715;</Link>
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