import React from 'react';
import LoginButton from "./LoginSystem/LoginButton";
import LogoutButton from './LoginSystem/LogoutButton';
import {Logo} from './Logo';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLogged: false
		}
	}

	// console.log(startLogin);
	handleClick = () => {
		console.log('click');
		// this.setState({isLogged: true})
	};

	render() {
		return (
			<header className="header">
				<Logo/>
				<form action="#" className="search">
					<input type="text" className="search__input" placeholder="Search hotels"/>
				</form>
				<LogoutButton/>
				<LoginButton />
			</header>
		)
	}
};

