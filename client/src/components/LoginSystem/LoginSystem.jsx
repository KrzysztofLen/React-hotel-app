// @flow
import * as React from 'react';
import {connect} from "react-redux";
import {Cross} from '../SVG/Cross';
import Payments from "../Payments/Payments";
import LoginModal from "./LoginModal";

type Props = {
	auth: Object,
	dispatch: Function
}

type State = {
	modalIsOpen: boolean
}

class LoginSystem extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false
		};

		(this: any).onModalOpen = this.onModalOpen.bind(this);
		(this: any).onCloseModal = this.onCloseModal.bind(this);
	}

	onModalOpen() {
		this.setState({modalIsOpen: true});
	}

	onCloseModal() {
		this.setState({modalIsOpen: false});
	}

	renderContent() {
		switch (this.props.auth) {
			case null:
				return (
					<LoginModal onModalOpen={this.onModalOpen} onCloseModal={this.onCloseModal}
					            isOpen={this.state.modalIsOpen}/>
				);
			case false:
				return (
					<LoginModal onModalOpen={this.onModalOpen} onCloseModal={this.onCloseModal}
					            isOpen={this.state.modalIsOpen}/>
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