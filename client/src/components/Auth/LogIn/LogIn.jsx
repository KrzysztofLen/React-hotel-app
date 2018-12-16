import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class LoginForm extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: '',
			redirectTo: null
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
		console.log('handleSubmit');

		axios.post("/api/login", {
			username: this.state.username,
			password: this.state.password
		}).then((response) => {
			if (response.status === 200) {
				console.log('*** login response: ***');
				console.log(response.data.username);
				// update App.js state
				this.props.updateUser({
					loggedIn: true,
					username: response.data.username
				});
				// update the state to redirect to home
				this.setState({
					redirectTo: '/'
				});
			}
		}).catch(err => {
			console.log('Login error:', err);
		});
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{pathname: this.state.redirectTo}}/>
		} else {
			return (
				<div className="LoginForm">
					<h1>Login</h1>
					<form className="form-horizontal">
						<div className="LoginForm__formGroup">
							<label htmlFor="username" className="LoginForm__label">Username: </label>
							<input type="text" id="username" placeholder="Username" name="username"
							       value={this.state.username} onChange={this.handleChange}
							       className="LoginForm__input"/>
						</div>
						<div className="LoginForm__formGroup">
							<label htmlFor="password" className="LoginForm__label">Password: </label>
							<input type="password" placeholder="Password" name="password" value={this.state.password}
							       onChange={this.handleChange}
							       className="LoginForm__input"/>
						</div>
						<div className="LoginForm__formGroup">
							<button type="submit" className="button is-link" onClick={this.handleSubmit}>Login</button>
						</div>
					</form>
				</div>
			)
		}
	}
}

export default LoginForm;
