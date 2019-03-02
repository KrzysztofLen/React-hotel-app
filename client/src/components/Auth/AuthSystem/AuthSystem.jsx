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
			case false:
				return (
					<React.Fragment>
						<button className="button is-success"
						        onClick={this.onModalOpen}>Login<Check width={20} height={20}/></button>
						<ModalWindow isOpen={this.state.modalIsOpen} closeModal={this.onCloseModal}
						             component={<Auth/>}/>
					</React.Fragment>
				);
			default:
				return (
					<ul className={"dropdown__menu"}>
						<li className={"dropdown__menu-item"}>
							<input className={"dropdown__input"} id="check" type="checkbox" name="menu"/>
							<label className={"dropdown__label"} htmlFor="check">
								<svg version="1.1" fill="#BA265D" xmlns="http://www.w3.org/2000/svg" width="20"
								     height="20"
								     viewBox="0 0 20 20">
									<title>chevron-small-down</title>
									<path
										d="M13.418 7.859c0.271-0.268 0.709-0.268 0.978 0s0.272 0.701 0 0.969l-3.908 3.83c-0.27 0.268-0.707 0.268-0.979 0l-3.908-3.83c-0.27-0.267-0.27-0.701 0-0.969s0.709-0.268 0.978 0l3.421 3.141 3.418-3.141z"></path>
								</svg>
							</label>
							<ul className={"dropdown__submenu"}>
								<li>
									<a href="#" className={"dropdown__submenu-item"}>
									<span className="credits">Credits: <span className="credits__value">
										{this.props.currentUserAuth.credits}
										</span>
									</span>
										<Payments/>
										<a href="/api/logout" className="button is-danger">Logout<Cross width={20}
										                                                                height={20}/></a>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				)
		}
	}

	render() {
		return (
			<div className="login__container">
				{this.props.currentUserAuth && <span className="login__profile">
					<span>Hello</span>
					<span className="login__profile--name">{this.props.currentUserAuth.name}</span>
					<span>!</span>
				</span>
				}
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