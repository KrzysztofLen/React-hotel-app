// @flow
import * as React from 'react';
import {connect} from "react-redux";
import {Cross} from '../../SVG/Cross';
import Payments from "../../Payments/Payments";
import {Check} from "../../SVG/Check";
import ModalWindow from "../../ModalWindow/ModalWindow";
import Auth from "./../Auth";

type Props = {
	currentUserAuth: Object,
	dispatch: Function
}

type State = {
	modalIsOpen: boolean
}

class AuthSystem extends React.Component<Props, State> {
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
				<React.Fragment>
					<button className="button is-success"
					        onClick={this.onModalOpen}>Login<Check width={20} height={20}/></button>
					<ModalWindow isOpen={this.state.modalIsOpen} closeModal={this.onCloseModal} component={<Auth/>}/>
				</React.Fragment>
			)
				;
			case false:
				return (
					<React.Fragment>
						<button className="button is-success"
						        onClick={this.onModalOpen}>Login<Check width={20} height={20}/></button>
						<ModalWindow isOpen={this.state.modalIsOpen} closeModal={this.onCloseModal} component={<Auth/>}/>
					</React.Fragment>
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

interface AuthInterface {
	currentUserAuth: Object,
	googleId: string,
	name: string,
	credits: number
}

function mapStateToProps({currentUserAuth}: AuthInterface) {
	return {
		currentUserAuth
	}
}

export default connect(mapStateToProps)(AuthSystem)