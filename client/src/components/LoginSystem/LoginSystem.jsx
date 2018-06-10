// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Check} from '../SVG/Check';
import {Cross} from '../SVG/Cross';

type Props = {
	auth: Object,
	dispatch: Function
}

class LoginSystem extends Component<Props> {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<a href="/auth/google" className="btn btn--login">Login<Check width={20} height={20}/></a>
				);
			default:
				return (
					<a href="/api/logout" className="btn btn--logout">Logout<Cross width={20} height={20}/></a>
				)
		}
	}

	render() {
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
	name: string
}

function mapStateToProps({auth}:Auth) {
	return {
		auth
	}
}

export default connect(mapStateToProps)(LoginSystem)