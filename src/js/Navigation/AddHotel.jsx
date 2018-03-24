import React from 'react';
import {Link} from 'react-router-dom';

export const AddHotel = () => (
	<li className="side-nav__item">
		<Link to="/add" className="side-nav__link">
			<span>Add Hotel</span>
		</Link>
	</li>
);