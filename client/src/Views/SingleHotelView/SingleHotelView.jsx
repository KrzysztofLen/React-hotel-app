import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import * as actions from '../../Redux/actions/index';
import HotelGallery from '../../components/HotelGallery/HotelGallery';
import {HotelOverview} from "../../components/Hotel/HotelOverview/HotelOverview";
import {Details} from "../../components/Details/Details";
import {connect} from "react-redux";
import Weather from "../../components/Weather/Weather";

class SingleHotelView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		this.props.fetchHotels();
		this._timer = setTimeout(() => {
			this.setState({
				data: this.props.hotelsList,
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
								<HotelGallery images={desc.hotel_images}/>
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

function mapStateToProps({hotelsList}) {
	return {
		hotelsList
	}
}

export default connect(mapStateToProps, actions)(SingleHotelView);