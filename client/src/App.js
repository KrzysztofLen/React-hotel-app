import React, {Component} from 'react';

// Components
import HotelsList from './components/HotelList.jsx';

import {connect} from 'react-redux';
import * as actions from './actions';

class App extends Component {
	componentDidMount() {
		// this.props.fetchHotels();
		this.props.fetchUser();
	}

	render() {
		console.log('%c [APP] ', 'background: #222; color: #bada55', this.props);

		return (
			<div className="container">
				<div className="content">
					<HotelsList/>
				</div>
			</div>
		);
	}
}

function mapStateToProps({hotels}) {
	return {
		hotels
	}
}

export default connect(mapStateToProps, actions)(App);
