import React, {Component} from 'react';

// Components
import HotelsList from './components/HotelList/HotelList.jsx';

import {connect} from 'react-redux';
import * as actions from './Redux/actions';
import {getFilteredHotels} from "./selectors/getFilteredHotels";
import Filters from "./components/Filters/Filters";


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
		this.props.fetchHotels();
		this.props.fetchUser();
		this.props.fetchHotelsLength();
		//Temp to see Loading
		this._timer = setTimeout(() => {
			this.setState({
				isLoading: false
			});
		}, 2000);
	}

	componentWillUnmount() {
		clearTimeout(this._timer);
	}

	render() {
		return (
			<div className="container">
				<Filters/>
				<div className="content">
					{this.props.hotelsList.length === 0 && this.state.isLoading === false ? <span className="content__no-results">Sorry no results :(</span> :
						<HotelsList isLoading={this.state.isLoading} data={this.props.hotelsList}/>
					}
				</div>
			</div>
		);
	}
}

function mapStateToProps({hotelsList, filterHotels}) {
	return {
		hotelsList: getFilteredHotels(hotelsList, filterHotels)
	}
}

export default connect(mapStateToProps, actions)(App);
