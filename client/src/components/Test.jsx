import * as React from 'react'
import Hotel from './Hotel';
import Loader from './Loader/Loader';

import {connect} from 'react-redux';

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent: false,
			perpage: 6,
			page: 1,
			data: [],
			isLoading: false
		};
	}

	componentDidMount() {
		this.setState({isLoading: true});

		//Temp to see Loading
		setTimeout(() => {
			console.log('%c Test component ', 'background: #222 color: #bada55', this.props);
			//
			// this.setState({
			// 	data: this.props.hotels.hotels,
			// 	isLoading: false
			// });
		}, 2000);

	}

	render() {

		return (
			<div>Lorem ipsum</div>
		)
	}
}

function mapStateToProps({hotels}) {
	return {
		hotels
	}
}

export default connect(mapStateToProps)(Test);