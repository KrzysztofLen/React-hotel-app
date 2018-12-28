//@ Flow
import React, {Component} from 'react';
import SignUpForm from "./SignUpForm/SignUpForm";
import LoginForm from "./LoginForm/LoginForm";
import GoogleSignUp from "./GoogleSignUp/GoogleSignUp";

type State = {
	onRegisterForm: boolean
}

class Auth extends Component<State> {
	constructor(props) {
		super(props);

		this.state = {
			onRegisterForm: false
		};

		(this: any).onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState((prevState): Object => {
			return {
				onRegisterForm: !prevState.onRegisterForm
			}
		});
	}

	render() {
		return (
			<React.Fragment>
				{this.state.onRegisterForm === true &&
				<React.Fragment>
					<h3 className={"auth__header"}>Sign Up for free!</h3>
					<SignUpForm/>
					<button className={"button inline"} onClick={this.onClick}>Back</button>
				</React.Fragment>}
				{this.state.onRegisterForm === false &&
				<React.Fragment>
					<h3 className={"auth__header"}>Welcome</h3>
					<LoginForm/>
					<span className={"auth__signup"}>Don't have an account?, <button className={"button inline"} onClick={this.onClick}>Create an account!</button></span>
					<GoogleSignUp/>
				</React.Fragment>}
			</React.Fragment>
		)
	}
}

export default Auth;