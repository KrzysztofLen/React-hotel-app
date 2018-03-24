import React from 'react';
import { NavLink } from 'react-router-dom'

export const Logo = () => (
	<NavLink to="/">
		<img src={require("../assets/logo.png")} className="logo" alt="trillo logo"/>
	</NavLink>
);