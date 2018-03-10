import React, {Component} from 'react';

// Components
import Header from './js/Header.jsx';
import Navigation from './js/Navigation'
import HotelsList from './js/HotelList.jsx';


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<Header/>
				<div className="content">
					<Navigation/>
					<HotelsList/>
				</div>
			</div>
		);
	}
}


export default App;
