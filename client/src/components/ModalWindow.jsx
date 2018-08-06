import React from 'react';
import Modal from 'react-modal';
import {Link} from "react-router-dom";

const customStyles = {
	overlay: {
		position: 'fixed',
		overflow: 'scroll',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.75)'
	}
};

const ModalWindow = (props) => {
	return (
		<Modal
			isOpen={props.isOpen}
			onRequestClose={props.closeModal}
			contentLabel="Selected option"
			className="modal"
			style={customStyles}
			ariaHideApp={false}
		>
			{props.component}
			<Link to={"/"} onClick={props.closeModal} className="modal__close"></Link>
		</Modal>)
};

export default ModalWindow;