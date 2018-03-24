import React from 'react';
import {Link} from 'react-router-dom';

export const BuyHotel = () => (
	<li className="side-nav__item">
		<Link to="/buy" className="side-nav__link">
			<span>Buy Hotel</span>
		</Link>
	</li>
);