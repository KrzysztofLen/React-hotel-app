import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";
import {NavLink} from 'react-router-dom';

const Header = ({startLogin}) => {
	console.log(startLogin);
	return (
		<header className="header">
			<NavLink to="/">
				<img src={require("../assets/logo.png")} className="logo" alt="trillo logo"/>
			</NavLink>
			<form action="#" className="search">
				<input type="text" className="search__input" placeholder="Search hotels"/>
			</form>
			<button className="btn btn--login" onClick={startLogin}>Login</button>
			{/*<NavLink to="/" className="header__back">Back</NavLink>*/}
		</header>
	)
}

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Header);