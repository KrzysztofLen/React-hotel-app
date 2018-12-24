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
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label htmlFor="email">Email:</label>
					<Field name={"email"}
					       type={"text"}
					       component={"input"}
					       autoComplete={"none"}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="password">Password:</label>
					<Field name={"password"}
					       type={"password"}
					       component={"input"}
					       autoComplete={"none"}
					/>
				</fieldset><div>{this.props.errorMessage}</div>
				<button>Sign In!</button>
			</form>
		)
	}
}

function mapStateToProps(state) {
	return {
		errorMesssage: state.authUser.errorMessage
	}
}

export default compose(
	connect(mapStateToProps, actions),
	reduxForm({
		form: 'signin'
	})
)(LoginForm);