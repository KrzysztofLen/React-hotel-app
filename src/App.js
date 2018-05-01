import React from 'react';

// Components
import Header from './components/Header.jsx';
import HotelsList from './components/HotelList.jsx';


class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header/>
				<div className="content">
					<HotelsList/>
				</div>
			</div>
		);
	}
}


export default App;
