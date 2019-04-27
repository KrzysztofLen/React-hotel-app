import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import * as actions from '../../Redux/actions';
import send from "../../assets/SVG/paper-plane.svg";

class AddHotelReview extends Component {
	renderFieldsReview = () => {
		const entries = Object.entries(this.props.addHotelFormValues);

		const labels = [];
		for (const [name, value] of entries) {
			const labelsNames = name.replace("_", " ");
			labels.push({labelsNames, value});
		}

		return (
			<React.Fragment>
				{labels.map(({labelsNames, value}, idx) => {
					return <div className="hotel-form__value" key={idx}>
						<span className={"hotel-review__label"}>{labelsNames}</span>
						<span
							className={"hotel-review__value"}>{(value === null || value === "") ? "empty" : value.toString()}</span>
					</div>
				})}
			</React.Fragment>
		)
	}

	render() {
		console.log(this.props.addHotelFormValues);
		return (
			<div className={"hotel-form"}>
				<div className={"hotel-form__container"}>
					<div className={"content__header-wrapper"}>
						<h1 className={"view-header"}>Please confirm your entries</h1>
					</div>
					<div className={"hotel-review__wrapper"}>
						<div className={"hotel-review__values"}>
							{this.renderFieldsReview()}
							<div className={"hotel-review__buttonWrapper"}>
								<Link to={"/add"} className="button is-warning">Back</Link>
							</div>
						</div>
						<div className={"hotel-review__send"}
						     onClick={() => this.props.submitSurvey(this.props.addHotelFormValues, this.props.history)}>
							<img className={"hotel-review__sendIcon"} src={send} alt=""/>
							Send
							<Link to="/" className={"hotel-form__close"}>&#x2715;</Link>
						</div>
					</div>
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