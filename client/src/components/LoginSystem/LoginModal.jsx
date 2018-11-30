// @flow
import * as React from 'react';
import {Check} from "../SVG/Check";
import GoogleBtn from "./LoginGoogleBtn";
import ModalWindow from "../ModalWindow";

type Props = {
	onModalOpen: Function,
	isOpen: boolean,
	onCloseModal: Function
}

const LoginModal = (props: Props) => (
	<React.Fragment>
		<button className="button is-success" onClick={props.onModalOpen}>Login<Check width={20} height={20}/></button>
		<ModalWindow isOpen={props.isOpen} closeModal={props.onCloseModal} component={<GoogleBtn/>}/>
	</React.Fragment>
);

export default LoginModal;