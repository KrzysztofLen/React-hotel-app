// @flow
import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.png';

export const Logo = () => (
	<div className={"logo__container"}>
		<NavLink to="/">
			<img src={logo} className="logo" alt="trillo logo"/>
		</NavLink>
	</div>
);