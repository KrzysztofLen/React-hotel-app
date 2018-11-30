import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Gallery from '../Gallery/Gallery';
import {HotelOverview} from "../HotelOverview/HotelOverview";
import {Details} from "../Details/Details";
import {connect} from "react-redux";
import Weather from "../Weather/Weather";

class SingleHotel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		this._timer = setTimeout(() => {
			this.setState({
				data: this.props.state.hotels,
				isLoading: false
			});
		}, 1500);
	}

	componentWillUnmount() {
		clearTimeout(this._timer);
	}

	render() {
		const index = this.props.match.params.id;
		const value = this.state.data.filter(x => x._id === index);
		const [desc] = value;

		return (
			<div className="content">
				<div className="content__container">
					<main className="hotel-view">
						{this.state.isLoading ? <Loader text="Loading"/> :
							<React.Fragment>
								<Gallery images={desc.hotel_images}/>
								<HotelOverview {...desc} />
								<Weather adress={desc.hotel_adress} city={desc.hotel_city}/>
								<Details/>
							</React.Fragment>
						}
					</main>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		state
	}
}

export default connect(mapStateToProps)(SingleHotel);