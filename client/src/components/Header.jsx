// @flow

import React from 'react';
import LoginSystem from './LoginSystem/LoginSystem';
import {Logo} from './Logo/Logo';

export const Header = () => (
	<header className="header">
		<Logo/>
		<form action="#" className="search">
			<input type="text" className="search__input" placeholder="Search hotels"/>
		</form>
		<LoginSystem/>
	</header>
);



