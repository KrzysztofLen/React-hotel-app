import React, {Component} from 'react';
import {GooglePlus} from "../SVG/GooglePlus";
import SignUp from "../SignUp/SignUp";
import LoginForm from "../LogIn/LogIn";

class GoogleBtn extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false,
			username: null
		};

		this.updateUser = this.updateUser.bind(this);
	}

	updateUser(userObject) {
		console.log("*** LOGIN GOOGLE CLASS ***");
		console.log(userObject);
		this.setState(userObject)
	}

	render() {
		return (
			<React.Fragment>
				<SignUp/>
				<LoginForm updateUser={this.updateUser}/>
				<div className="GoogleBtn__container">
					<span>or</span>
					<a href="/auth/google" className="button is-google">Sign in with Google<GooglePlus width={20}
					                                                                                   height={20}/></a>
				</div>
			</React.Fragment>
		)
	}
}

export default GoogleBtn;