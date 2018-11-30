import React, {Component} from 'react';
import axios from "axios";

class SignupForm extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: '',
			confirmPassword: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('sign-up-form, username: ');
		console.log(this.state.username);
		console.log(this.state.password);

		axios.post('/api/signup', {
			username: this.state.username,
			password: this.state.password
		}).then(response => {
			console.log(response);
			if (!response.data.error) {
				console.log('successful signup')
				this.setState({
					redirectTo: '/login',
					error: null
				})
			} else if (response.data.error) {
				console.log('username already taken', response.data.error)
				this.setState({
					error: response.data.error
				})
			}
		}).catch(err => {
			console.log('Sing up server error', err);
		});
	}

	render() {
		return (
			<div className="SignupForm">
				<h1>Signup form</h1>
				<div className="SignupForm__formGroup">
					<label htmlFor="username" className="SignupForm__label">Username: </label>
					<input type="text" name="username" value={this.state.username} onChange={this.handleChange}
					       className="SignupForm__input"/>
				</div>
				<div className="SignupForm__formGroup">
					<label htmlFor="password" className="SignupForm__label">Password: </label>
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange}
					       className="SignupForm__input"/>
				</div>
				{this.state.error && <p>{this.state.error}</p>}
				<div className="SignupForm__formGroup">
					<button className="button is-link" onClick={this.handleSubmit}>Sign Up</button>
				</div>
			</div>
		)
	}
}

export default SignupForm;