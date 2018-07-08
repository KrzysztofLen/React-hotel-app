import React, {Component} from 'react';

import HotelImage from '../HotelImage/HotelImage';
import HotelLink from '../HotelLink/HotelLink';
import HotelRating from '../HotelRating/HotelRating';
import ToggleButton from '../External/ToggleButton/ToggleButton';
import HotelPrice from '../HotelPrice/HotelPrice';
import HotelOpinion from '../HotelOpinion/HotelOpinion';
import HotelFacilities from '../HotelFacilities/HotelFacilities';
import HotelDescription from '../HotelDescription/HotelDescription';

import isNew from '../../assets/new.svg';
import Modal_OLD from "../Modal_OLD";
import ModalWindow from "../ModalWindow";

class HotelListItem extends Component {
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
					<ModalWindow isOpen={this.state.modalIsOpen} closeModal={this.onCloseModal} element={<Modal_OLD value={this.props}/>}/>
				</div>
				<div className="hotel__name-container">
					<HotelLink hotelName={this.props.data.hotel_name}
					           hotelDistance={this.props.data.hotel_distance}
					           hotelAdress={this.props.data.hotel_adress}
					           id={this.props.id}/>
					<HotelRating rate={this.props.data.hotel_stars}/>
				</div>
				<div className="hotel__details--adressBox">
					<span className="hotel__details--adress">{this.props.data.hotel_adress}</span>
					<p className="hotel__details--distance">(<span
						className="hotel__details--distanceValue">{this.props.data.hotel_distance}</span> km from
						center)</p>
				</div>
				<div className="hotel__details-box">
					<HotelPrice price={this.props.data.hotel_price}/>
					<HotelOpinion hotelRating={this.props.data.hotel_rating}
					              hotelReviews={this.props.data.hotel_reviews}/>
					<div className="hotel__details--more">
						<ToggleButton key={this.props.index}
						              index={this.props.index}
						              activeIndex={this.state.activeIndex === this.props.index}
						              onClick={this.onToggleButton}
						              btnClass={"button" + (this.state.activeIndex === this.props.index ? ' is-link' : ' is-info') + "--is-outlined"}
						/>
					</div>
				</div>
				{this.state.activeIndex === this.props.index &&
				<React.Fragment>
					<HotelDescription description={this.props.data.hotel_description}/>
					<HotelFacilities {...this.props.data}/>
				</React.Fragment>}
				{this.props.data.is_new ? <img src={isNew} alt="new" className="hotel__details--isNew"/> : null}
			</div>
		)
	}
}

export default HotelListItem;