import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Check} from '../SVG/Check';
import {Cross} from '../SVG/Cross';

class LoginSystem extends Component {
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
			<div>
				{this.renderContent()}
			</div>
		)
	}
}

function mapStateToProps({auth}) {
	return {
		auth
	}
}

export default connect(mapStateToProps)(LoginSystem)