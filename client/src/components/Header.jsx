import React from 'react';
import LoginSystem from './LoginSystem/LoginSystem';
import {Logo} from './Logo/Logo';

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<Logo/>
				<form action="#" className="search">
					<input type="text" className="search__input" placeholder="Search hotels"/>
				</form>
				<LoginSystem/>
			</header>
		)
	}
};

