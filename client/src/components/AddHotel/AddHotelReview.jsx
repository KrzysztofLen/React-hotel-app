//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import * as actions from '../../Redux/actions';
import send from "../../assets/SVG/paper-plane.svg";

class AddHotelReview extends Component {
	renderFieldsReview = () => {
		const entries = Object.entries(this.props.addHotelFormValues);

		const test = [];
		for (const [name, value] of entries) {
			test.push({name, value});
		}

		return (
			<div className="hotel-form__reviewValues">
				{test.map(({name, value}, idx) => {
					return <div className="hotel-form__value" key={idx}>
						<span className={"hotel-form__reviewLabel"}>{name}</span>
						<span className={"hotel-form__reviewValue"}>{(value === null || value === "") ? "empty" : value.toString()}</span>
					</div>
				})}
			</div>
		)
	}

	render() {
		return (
			<div className={"hotel-form"}>
				<div className={"hotel-form__container"}>
					<h5 className={"hotel-form__header"}>Please confirm your entries</h5>
					<div className={"hotel-form__valuesBox"}>
						{this.renderFieldsReview()}
					</div>
					<div className={"hotel-review__buttonWrapper"}>
						<Link to={"/add"} className="button is-warning">Back</Link>
					</div>
					<div className={"hotel-form__send"}
					     onClick={() => this.props.submitSurvey(this.props.addHotelFormValues, this.props.history)}>
						<img className={"hotel-form__sendIcon"} src={send} alt=""/>
						Send
					</div>
					<Link to="/" className={"hotel-form__close"}>&#x2715;</Link>
				</div>
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