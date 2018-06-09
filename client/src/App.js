import React, {Component} from 'react';

// Components
import HotelsList from './components/HotelList.jsx';

import {connect} from 'react-redux';
import * as actions from './actions';
import {getFilteredHotels} from "./selectors/getFilteredHotels";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading: false
		};
	}
	componentDidMount() {
		this.setState({isLoading: true});
		this.props.fetchUser();
		//Temp to see Loading
		setTimeout(() => {
			console.log(this.props);
			this.setState({
				isLoading: false
			});
		}, 2000);
	}

	render() {
		console.log('%c [APP PROPS] ', 'background: #222; color: #f21c01', this.props);

		return (
			<div className="container">
				<div className="content">
					<HotelsList isLoading={this.state.isLoading} data={this.props.hotels}/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('%c [APP STATE] ', 'background: #222; color: #f21c01', state);
	return {
		hotels: getFilteredHotels(state.hotels, state.hotelsSearch)
	}
}

export default connect(mapStateToProps, actions)(App);
