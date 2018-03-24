import React from 'react';

// Components
import Header from './../Header.jsx';
import Navigation from './../Navigation';

export const AddHotel = () => (
	<React.Fragment>
		<div className="container">
			<Header/>
			<div className="content">
				<Navigation/>
				<h1>This is from AddHotel</h1>
			</div>
		</div>
	</React.Fragment>
);