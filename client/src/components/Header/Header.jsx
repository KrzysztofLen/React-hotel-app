import React, {Component} from 'react';
import LoginSystem from '../LoginSystem/LoginSystem';
import {Logo} from '../Logo/Logo';
import {getFilteredHotels} from "../../selectors/getFilteredHotels";
import {connect} from "react-redux";
import Search from "../Search/Search";
import ModalWindow from "../ModalWindow";
import {Check} from "../SVG/Check";
import Success from "../Success/Success";

export class Header extends Component {
	constructor(props) {
		super(props);

		this.onModalOpen = this.onModalOpen.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);

		this.state = {
			modalIsOpen: false
		};
	}

	onModalOpen() {
		this.setState({modalIsOpen: true});
	}

	onCloseModal() {
		this.setState({modalIsOpen: false});
	}

	render() {
		return (
			<header className="header">
				<Logo/>
				<Search/>
				<button className="button is-success" onClick={this.onModalOpen}>Login<Check width={20} height={20} /></button>
				<ModalWindow isOpen={this.state.modalIsOpen} closeModal={this.onCloseModal} component={<LoginSystem/>}/>
			</header>
		)
	}
}

const mapStateToProps = (state: Object) => {
	return {
		hotels: getFilteredHotels(state.hotels, state.hotelsSearch)
	};
};

export default connect(mapStateToProps, null)(Header);
