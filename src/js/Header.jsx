import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => (
	<header className="header">
		<NavLink to="/">
			<img src={require("../assets/logo.png")} className="logo" alt="trillo logo"/>
		</NavLink>
		<form action="#" className="search">
			<input type="text" className="search__input" placeholder="Search hotels"/>
		</form>
		<button className="btn btn--login">Login</button>
		{/*<NavLink to="/" className="header__back">Back</NavLink>*/}
	</header>
);

export default Header;