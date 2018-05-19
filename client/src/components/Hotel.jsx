import React, {Component} from 'react';
import OptionModal from './Modal';

import HotelImage from './HotelImage/HotelImage';
import HotelLink from './HotelLink/HotelLink';
import HotelRating from './Hotel/HotelRating';
import ToggleButton from './External/ToggleButton/ToggleButton';
import HotelPrice from './HotelPrice/HotelPrice';
import Rating from "./External/Rating/Rating";

const HotelDescription = (data) => (
	<div className="hotel__details--description">
		<p className="hotel__details--text">{data.description}</p>
	</div>
);

class Hotel extends Component {
	constructor(props) {
		super(props);
		this.onModalOpen = this.onModalOpen.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
		this.onToggleButton = this.onToggleButton.bind(this);

		this.state = {
			modalIsOpen: false,
			activeIndex: null
		};
	}

	onModalOpen() {
		this.setState({modalIsOpen: true});
	}

	onCloseModal() {
		this.setState({modalIsOpen: false});
	}

	onToggleButton = (index) => {
		this.setState({
			activeIndex: index
		});
		if (this.state.activeIndex === index) {
			this.setState({
				activeIndex: null
			})
		}
	};

	render() {
		return (
			<div className="hotel__container">
				<div className="hotel__image-container">
					<HotelImage onClick={this.onModalOpen} image={this.props.data.hotel_images}/>
					<OptionModal isOpen={this.state.modalIsOpen} closeModal={this.onCloseModal} value={this.props}/>
				</div>
				<HotelLink hotelName={this.props.data.hotel_name}
				           hotelDistance={this.props.data.hotel_distance}
				           hotelAdress={this.props.data.hotel_adress}
				           id={this.props.index}/>
				<div className="hotel__details-box">
					<HotelPrice/>
					<HotelRating rate={this.props.data.hotel_stars}/>
					<div className="hotel__details--more">
						<ToggleButton key={this.props.index}
						              index={this.props.index}
						              activeIndex={this.state.activeIndex === this.props.index}
						              onClick={this.onToggleButton}
						              btnClass={"btn btn" + (this.state.activeIndex === this.props.index ? '--less' : '--more')}
						/>
					</div>
				</div>
				{this.state.activeIndex === this.props.index &&
				<React.Fragment>
					<HotelDescription description={this.props.data.hotel_description}/>
				</React.Fragment>}
			</div>
		)
	}
}

export default Hotel;