import React from 'react';
import {Link} from 'react-router-dom';

export const Cart = () => (
	<li className="side-nav__item">
		<Link to ="/cart" className="side-nav__link">
			<span>Cart</span>
		</Link>
	</li>
);