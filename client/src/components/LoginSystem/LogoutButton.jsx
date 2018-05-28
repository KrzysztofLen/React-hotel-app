import React from 'react';
import {connect} from 'react-redux';
// import {startLogout} from "../../actions/auth";

// export const LogoutButton = ({startLogout}) => {
// 	return (
// 		<button type="button" className="btn btn--login" onClick={startLogout}>Logout</button>
// 	)
// };
//
// const mapDispatchToProps = (dispatch) => ({
// 	startLogout: () => dispatch(startLogout())
// });
//
// export default connect(undefined, mapDispatchToProps)(LogoutButton);

export const LogoutButton = () => {
	return (
		<button type="button" className="btn btn--login" onClick={() => console.log('logout')}>Logout</button>
	)
};

export default LogoutButton;