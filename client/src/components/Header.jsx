// @flow

import React from 'react';
import LoginSystem from './LoginSystem/LoginSystem';
import {Logo} from './Logo/Logo';
import Search from "./Search/Search";

export const Header = () => (
	<header className="header">
		<Logo/>
		<Search/>
		<LoginSystem/>
	</header>
);



