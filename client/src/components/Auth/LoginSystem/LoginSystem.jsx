// @flow
import * as React from 'react';
import {connect} from "react-redux";
import {Cross} from '../../SVG/Cross';
import Payments from "../../Payments/Payments";
import LoginModal from "./LoginModal";

type Props = {
	currentUserAuth: Object,
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
		switch (this.props.currentUserAuth) {
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
							className="credits__value">{this.props.currentUserAuth.credits}</span>
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
				{this.props.currentUserAuth && <span className="login__profile">Hello
					<span className="login__profile--name">{this.props.currentUserAuth.name}</span>!</span>}
				{this.renderContent()}
			</div>
		)
	}
}

interface Auth {
	currentUserAuth: Object,
	googleId: string,
	name: string,
	credits: number
}

function mapStateToProps({currentUserAuth}: Auth) {
	return {
		currentUserAuth
	}
}

export default connect(mapStateToProps)(LoginSystem)