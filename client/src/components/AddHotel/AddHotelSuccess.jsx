import React, {Component} from 'react';
import Success from "../Success/Success";
import ModalWindow from "../ModalWindow/ModalWindow";

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
		return (
			<React.Fragment>
				<ModalWindow isOpen={this.state.modalIsOpen}
				                      closeModal={this.onCloseModal}
				                      component={<Success/>}/>
			</React.Fragment>
		)
	}
}

export default AddHotelSuccess;