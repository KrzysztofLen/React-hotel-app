import React from 'react';

// Components
import Header from './../Header.jsx';
import Rating from "../External/Rating/Rating";

export const AddHotel = () => (
	<React.Fragment>
		<div className="container">
			<Header/>
			<div className="content">
				<h1>This is from AddHotel</h1>
				<Rating />
			</div>
		</div>
	</React.Fragment>
);