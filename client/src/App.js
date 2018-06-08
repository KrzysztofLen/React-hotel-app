import React, {Component} from 'react';

// Components
import HotelsList from './components/HotelList.jsx';

import {connect} from 'react-redux';
import * as actions from './actions';


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
				data: this.props.hotels.hotels,
				isLoading: false
			});
		}, 2000);
	}

	render() {
		console.log('%c [APP] ', 'background: #222; color: #bada55', this.state.data);

		return (
			<div className="container">
				<div className="content">
					<HotelsList isLoading={this.state.isLoading} data={this.state.data}/>
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
