import React from 'react';
import Modal from 'react-modal';
import {Link} from "react-router-dom";

const customStyles = {
	overlay: {
		position: 'fixed',
		overflow: 'hidden',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		zIndex: "999"
	}
};

const ModalWindow = (props) => {
	return (
		<div>
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
			</Modal>
		</div>
	)
};

export default ModalWindow;