import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../../actions/auth";

// export const LoginButton = ({startLogin}) => {
// 	return (
// 		<button type="button" className="btn btn--login" onClick={startLogin}>Login</button>
// 	)
// };
//
// const mapDispatchToProps = (dispatch) => ({
// 	startLogin: () => dispatch(startLogin())
// });
//
// export default connect(undefined, mapDispatchToProps)(LoginButton);

export const LoginButton = () => {
	return (
		<button type="button" className="btn btn--login" onClick={() => console.log('login')}>Login</button>
	)
}

export default LoginButton;