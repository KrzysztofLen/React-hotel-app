import React, {Component} from 'react';

// Components
import HotelsList from './components/HotelList/HotelList.jsx';

import {connect} from 'react-redux';
import * as actions from './actions';
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
