import React from 'react';

import {HotelLink} from './Navigation/HotelLink';
import {AddHotel} from './Navigation/AddHotel';
import {BuyHotel} from './Navigation/BuyHotel';
import {Cart} from './Navigation/Cart';

const Navigation = () => (
	<nav className="sidebar">
		<ul className="side-nav">
			<HotelLink/>
			<BuyHotel/>
			<Cart/>
			<AddHotel/>
		</ul>

		<div className="legal">
			&copy; 2017 by Trillo. All rights reserved.
		</div>
	</nav>
);

export default Navigation;