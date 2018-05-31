import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Gallery from '../Gallery/Gallery';
import {HotelOverview} from "../HotelOverview/HotelOverview";
import {Details} from "../Details/Details";

class SingleHotel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({data: this.props.appData, isLoading: false});
		}, 1500);
	}


	render() {
		const index = parseInt(this.props.match.params.id);
		const value = this.state.data.filter(x => x.id === index);
		const [desc] = value;

		return (
			<div className="content">
				<div className="content__container">
					<main className="hotel-view">
						{this.state.isLoading ? <Loader text="Loading"/> :
							<React.Fragment>
								<Gallery images={desc.hotel_images}/>
								<HotelOverview {...desc} />
								<Details/>
							</React.Fragment>
						}
					</main>
				</div>
			</div>
		);
	}
}

SingleHotel.propTypes = {
	appData: PropTypes.array.isRequired
};


export default SingleHotel;