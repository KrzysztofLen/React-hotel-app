import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";

const LoginButton = ({startLogin}, isLogged) => {
	console.log(isLogged);
	return (
		<button type="button" className="btn btn--login" onClick={this.handleClick}>Login</button>
	)
};

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

// export default connect(undefined, mapDispatchToProps)(LoginButton);
export default LoginButton;