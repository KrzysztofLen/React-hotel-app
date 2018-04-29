import React from 'react';

// Components
import Header from './../Header.jsx';
import Navigation from '../Navigation/Navigation';
import Rating from "../External/Rating/Rating";

export const AddHotel = () => (
	<React.Fragment>
		<div className="container">
			<Header/>
			<div className="content">
				{/*<Navigation/>*/}
				<h1>This is from AddHotel</h1>
				<Rating />
			</div>
		</div>
	</React.Fragment>
);