import React, {Component} from 'react';
import Success from "../Success/Success";
import ModalWindow from "../ModalWindow/ModalWindow";
import Messages from "../External/Messages/Messages";

class AddHotelSuccess extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalIsOpen: true
		};
		this.onModalOpen = this.onModalOpen.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
	}

	onModalOpen() {
		this.setState({modalIsOpen: true});
	}

	onCloseModal() {
		this.setState({modalIsOpen: false});

	}

	render() {
		return <Messages type={"success"} message={"The operation ended with success"}/>
	}
}

export default AddHotelSuccess;