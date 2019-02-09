//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FIELDS, NUMBER_FIELDS, BOOLEAN_FIELDS} from './formFields';
import {Link, withRouter} from 'react-router-dom';
import * as actions from '../../Redux/actions';
import send from "../../assets/paper-plane.svg";

class AddHotelReview extends Component {
//
// 	=
// } (props, {onCancel, formValues, submitSurvey, history}) => {

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
	// //
	renderFieldsReview = () => {
		const entries = Object.entries(this.props.addHotelFormValues);
		// const keys = Object.keys(this.props.addHotelFormValues);
		// const values = Object.values(this.props.addHotelFormValues);
		const test = [];
		for (const [name, value] of entries) {
			test.push({name, value});
		}

		return (
			<div className="hotel-form__reviewValues">
				{test.map(({name, value}, idx) => {
					return <div className="hotel-form__value" key={idx}>
						<span className={"hotel-form__reviewLabel"}>{name}</span>
						<span>{(value === null || value === "") ? "empty" : value.toString()}</span>
					</div>
				})}
			</div>
		)

		// return (
		// 	<div className="hotel-form__values">
		// 		{keys.map(key => {
		// 			return <label>{key}</label>
		// 		})}
		// 		<div className="hotel-form__value">
		// 			{values.map(value => {
		// 				console.log(value)
		// 				return <span>{(value === null) ? "empty" : value.toString()}</span>
		// 			})}
		// 		</div>
		// 	</div>
		// )
	}

//TODO get from props and display it
	render() {
		return (
			<div className="hotel-form__review">
				<h5 className="hotel-form__header">Please confirm your entries</h5>
				<div className="hotel-form__valuesBox">
					{console.log(this.props)}
					{/*<div className="hotel-form__valueBox">*/}
					{this.renderFieldsReview()}
					{/*</div>*/}
					{/*<div className="hotel-form__valueBox">*/}
					{/*{reviewFields1}*/}
					{/*</div>*/}
					<div className="hotel-form__valueBox">
						{/*{reviewFields2}*/}
					</div>
				</div>
				<Link to={"/add"} className="button is-warning">Back</Link>
				<div className="hotel-form__send"
				     onClick={() => this.props.submitSurvey(this.props.addHotelFormValues, this.props.history)}>
					<img className="hotel-form__sendIcon" src={send} alt=""/>
					Send
				</div>
				<Link to="/" className="hotel-form__close">&#x2715;</Link>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		addHotelFormValues: state.addHotelFormValues
	}
}

export default connect(mapStateToProps, actions)(withRouter(AddHotelReview));