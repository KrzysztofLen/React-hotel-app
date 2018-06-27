import React, {Component} from 'react';
import success from '../../assets/check-circle.svg';
import {Link} from "react-router-dom";

class Success extends Component {
	render() {
		return (
			<div className="success__container">
				<img src={success} className="success__icon" alt="trillo logo"/>
				<h1>Sending succeeded</h1>
				<h5 className="success__subheader">The operation ended with success</h5>
				<Link to="/" className="btn btn--close">Close</Link>
			</div>
		)
	}
}

export default Success;