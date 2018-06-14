import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				amount={500}
				token={token => this.props.handleToken(token)}
				stripeKey='pk_test_i4bqegkyrDpgLBnCSffyUbAV'
				name="React-hotel-app"
				description="5$ for 5 credits"
				currency="USD"
			/>
		)
	}
}

export default connect(null, actions)(Payments);