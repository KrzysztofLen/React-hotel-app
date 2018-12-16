import React, {Component} from 'react';
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LogIn/LogIn";
import LoginSystemGoogleSignUp from "./LoginSystemGoogleSignUp";

class LoginSystemModal extends Component {
	render() {
		return (
			<React.Fragment>
				<SignUpForm/>
				{/*<LoginForm/>*/}
				<LoginSystemGoogleSignUp/>
			</React.Fragment>
		)
	}
}

export default LoginSystemModal;