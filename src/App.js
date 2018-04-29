import React, {Component} from 'react';

// Components
import Header from './components/Header.jsx';
import Navigation from './components/Navigation/Navigation'
import HotelsList from './components/HotelList.jsx';


class App extends Component {
	render() {
		return (
			<div className="container">
				<Header/>
				<div className="content">
					{/*<Navigation/>*/}
					<HotelsList/>
				</div>
			</div>
		);
	}
}


export default App;
