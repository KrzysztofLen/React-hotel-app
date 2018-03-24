import React from 'react';
import {Link} from 'react-router-dom';

export const HotelLink = () => (
	<li className="side-nav__item side-nav__item--active">
		<Link to="/" className="side-nav__link">
			<span>Hotel's</span>
		</Link>
	</li>
);