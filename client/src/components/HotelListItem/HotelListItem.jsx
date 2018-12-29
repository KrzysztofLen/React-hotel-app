// @flow
import * as React from 'react'
import HotelImage from '../Hotel/HotelImage/HotelImage';
import HotelLink from '../Hotel/HotelLink/HotelLink';
import HotelRating from '../Hotel/HotelRating/HotelRating';
import ToggleButton from '../External/ToggleButton/ToggleButton';
import HotelPrice from '../Hotel/HotelPrice/HotelPrice';
import HotelOpinion from '../Hotel/HotelOpinion/HotelOpinion';
import HotelFacilities from '../Hotel/HotelFacilities/HotelFacilities';
import HotelDescription from '../Hotel/HotelDescription/HotelDescription';

import isNewIcon from '../../assets/new.svg';
import ModalWindow from "../ModalWindow/ModalWindow";
import {connect} from "react-redux";

type Props = {
	viewTypeId: number,
	data: data,
	id: number,
	index: number
}

interface data {
	_id: number,
	hotel_name: string,
	hotel_distance: string,
	hotel_adress: string,
	hotel_stars: number,
	hotel_price: number,
	hotel_rating: number,
	hotel_reviews: number,
	hotel_description: string,
	is_new: boolean | string,
	hotel_images: Array<string>
}

type State = {
	activeIndex: number | null,
	modalIsOpen: boolean
}

class HotelListItem extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		(this: any).onModalOpen = this.onModalOpen.bind(this);
		(this: any).onCloseModal = this.onCloseModal.bind(this);
		(this: any).onToggleButton = this.onToggleButton.bind(this);

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

	onToggleButton = (index: number) => {
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
		const isNew = (this.props.data.is_new) ? Date.now() - parseInt(this.props.data.is_new, 10) : 0;
		const isNewDuration: number = 24 * 60 * 60 * 1000 * 7; // 7 days

		return (
			<div className={this.props.viewTypeId === 1 ? "hotel__container" : "hotel__container hotel__container--list"}>
				<div className="hotel__image-container">
					<HotelImage onClick={this.onModalOpen} image={this.props.data.hotel_images}/>
					<ModalWindow isOpen={this.state.modalIsOpen} closeModal={this.onCloseModal} element={"Test"}/>
				</div>
				<div className="hotel__name-container">
					<HotelLink hotelName={this.props.data.hotel_name}
					           hotelDistance={this.props.data.hotel_distance}
					           hotelAdress={this.props.data.hotel_adress}
					           id={this.props.data._id}/>
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
						              btnClass={"button inline"}
						/>
					</div>
				</div>
				{this.state.activeIndex === this.props.index &&
				<React.Fragment>
					<HotelDescription description={this.props.data.hotel_description}/>
					<HotelFacilities {...this.props.data}/>
				</React.Fragment>}
				{(isNew >= isNewDuration || isNew === 0) ? null : <img src={isNewIcon} alt="new" className="hotel__details--isNew"/>}
			</div>
		)
	}
}

interface viewType {
	viewTypeId: number
}

function mapStateToProps({viewTypeId}): viewType {
	return {
		viewTypeId
	}
}

export default connect(mapStateToProps, null)(HotelListItem);