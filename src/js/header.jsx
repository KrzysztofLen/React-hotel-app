import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return (
		<header className="header">
			<img src="../assets/logo.png" className="logo" alt="trillo logo"/>
			<form action="#" className="search">
				<input type="text" className="search__input" placeholder="Search hotels"/>
			</form>
			<NavLink to="/" className="header__back">Back</NavLink>
		</header>
	)
};

Header.defaultProps = {
	title: 'Questions',
	options: true
};

export default Header;