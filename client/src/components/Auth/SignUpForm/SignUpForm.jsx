import React, {Component} from 'react';
import {reduxForm, Field} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "./../../../Redux/actions";

class SignUpForm extends Component {
	onSubmit = (formProps) => {
		this.props.signUpUser(formProps, () => {
			this.props.history.push("/");
		});
	};

	render() {
		const {handleSubmit} = this.props;

		return (
			<React.Fragment>
				<form onSubmit={handleSubmit(this.onSubmit)} className={"form"}>
					<fieldset>
						<label htmlFor="email">Email:</label>
						<Field type={"text"} name={"email"} component={"input"}
						       autoComplete={"none"} className={"input"}/>
					</fieldset>
					<fieldset>
						<label htmlFor="password">Password:</label>
						<Field type={"password"} name={"password"} component={"input"}
						       autoComplete={"none"} className={"input"}/>
					</fieldset>
					<div className={"form__error-msg"}>{this.props.errorMessage}</div>
					<button className={"button is-success"}>Sign Up!</button>
				</form>
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		errorMessage: state.authUser.errorMessage
	}
}

export default compose(
	connect(mapStateToProps, actions),
	reduxForm({
		form: 'signup'
	})
)(SignUpForm);