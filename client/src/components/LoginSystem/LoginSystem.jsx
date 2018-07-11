// @flow
import * as React from 'react';
import {connect} from "react-redux";
import {Check} from '../SVG/Check';
import {Cross} from '../SVG/Cross';
import Payments from "../Payments/Payments";

type Props = {
	auth: Object,
	dispatch: Function
}

class LoginSystem extends React.Component<Props> {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return (
					<a href="/auth/google" className="button is-success">Login<Check width={20} height={20}/></a>
				);
			case false:
				return (
					<a href="/auth/google" className="button is-success">Login<Check width={20} height={20}/></a>
				);
			default:
				return (
					<React.Fragment>
						<span className="credits">Credits: <span
							className="credits__value">{this.props.auth.credits}</span>
						</span>
						<Payments/>
						<a href="/api/logout" className="button is-danger">Logout<Cross width={20} height={20}/></a>
					</React.Fragment>
				)
		}
	}

	render() {
		console.log(this.props.auth);
		return (
			<div className="login__container">
				{this.props.auth && <span className="login__profile">Hello
					<span className="login__profile--name">{this.props.auth.name}</span>!</span>}
				{this.renderContent()}
			</div>
		)
	}
}

interface Auth {
	auth: Object,
	googleId: string,
	name: string,
	credits: number
}

function mapStateToProps({auth}: Auth) {
	return {
		auth
	}
}

export default connect(mapStateToProps)(LoginSystem)