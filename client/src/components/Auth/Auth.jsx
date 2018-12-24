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
					<h3>Sign Up for free!</h3>
					<SignUpForm/>
					<button onClick={this.onClick}>Back</button>
				</React.Fragment>}
				{this.state.onRegisterForm === false &&
				<React.Fragment>
					<h3>Welcome</h3>
					<LoginForm/>
					<span>Don't have an account, <button onClick={this.onClick}>SignUp here!</button></span>
					<GoogleSignUp/>
				</React.Fragment>}
			</React.Fragment>
		)
	}
}

export default Auth;