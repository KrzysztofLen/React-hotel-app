import React from 'react';
import {connect} from 'react-redux';
import FIELDS from './formFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';


const AddHotelReview = ({ onCancel, formValues, submitSurvey, history}) => {

	const reviewFields = FIELDS.map(({name, label}, i) => {
		return (
			<div key={i}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		)
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
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