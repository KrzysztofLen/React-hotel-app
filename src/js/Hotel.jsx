import React, {Component} from 'react';
import OptionModal from './Modal';

import HotelImage from './Hotel/HotelImage';
import HotelLink from './Hotel/HotelLink';
import HotelRating from './Hotel/HotelRating';
import ToggleButton from './External/ToggleButton';

const HotelDescription = () => (
	<div className="hotel__details--description">
		<p className="hotel__details--text">Lorem ipsum dolor sit amet</p>
	</div>
);

const HotelPrice = () => (
	<div className="hotel__details--price">
		<span>$</span>599
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
					<HotelImage onClick={this.onModalOpen} image={this.props.data.image}/>
					<OptionModal isOpen={this.state.modalIsOpen} closeModal={this.onCloseModal} value={this.props}/>
				</div>
				<HotelLink hotelName={this.props.data.hotel_name} id={this.props.data.id}/>
				<HotelRating rate={this.props.data.rate}/>
				<div className="hotel__details--more">
					<ToggleButton key={this.props.index}
					              index={this.props.index}
					              activeIndex={this.state.activeIndex === this.props.index}
					              onClick={this.onToggleButton}
					              btnClass={"btn btn" + (this.state.activeIndex === this.props.index ? '--less' : '--more')}
					/>
				</div>
				{this.state.activeIndex === this.props.index &&
				<React.Fragment>
					<HotelDescription/>
					<HotelPrice/>
				</React.Fragment>}
			</div>
		)
	}
}

export default Hotel;