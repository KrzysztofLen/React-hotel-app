import React, {Component} from 'react';

// Components
import HotelsList from './components/HotelList/HotelList.jsx';

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
			this.setState({
				isLoading: false
			});
		}, 2000);
	}

	render() {
		return (
			<div className="container">
				<div className="content">
					{this.props.hotels.length === 0 && this.state.isLoading === false ? <span className="content__no-results">Sorry no results :(</span> :
						<HotelsList isLoading={this.state.isLoading} data={this.props.hotels}/>
					}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		hotels: getFilteredHotels(state.hotels, state.hotelsSearch)
	}
}

export default connect(mapStateToProps, actions)(App);
