import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import * as actions from "./../../../Redux/actions";

class LoginForm extends Component {
	onSubmit = (formProps) => {
		this.props.signInUser(formProps, () => {
			console.log(this.props);
		});
	};

	render() {
		const {handleSubmit} = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit)} className={"form"}>
				<fieldset>
					<label htmlFor="email">Email:</label>
					<Field name={"email"}
					       type={"text"}
					       component={"input"}
					       autoComplete={"none"}
					       className={"input"}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="password">Password:</label>
					<Field name={"password"}
					       type={"password"}
					       component={"input"}
					       autoComplete={"none"}
					       className={"input"}
					/>
				</fieldset>
				<div className={"form__error-msg"}>{this.props.errorMessage}</div>
				<button className={"button is-primary"}>Sign In!</button>
			</form>
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
		form: 'signin'
	})
)(LoginForm);