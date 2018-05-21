import React, {Component} from 'react';

// Components
import Header from './components/Header.jsx';
import HotelsList from './components/HotelList.jsx';

import {connect} from 'react-redux';
import * as actions from './actions';

class App extends Component {
	componentDidMount() {
		this.props.fetchHotels();
	}

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

export default connect(null, actions)(App);
