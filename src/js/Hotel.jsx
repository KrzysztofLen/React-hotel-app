import React, {Component} from 'react';
import OptionModal from './Modal';

import HotelImage from './Hotel/HotelImage';
import HotelLink from './Hotel/HotelLink';
import HotelRating from './Hotel/HotelRating';

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

class Button extends React.Component {
	handleClick = () => {
		console.log(this.props.index);
	}

	render() {
		return (
			<div className="hotel__details--more">
				<button className="btn btn--more" onClick={this.handleClick}>More</button>
			</div>
		)
	}
}

class Hotel extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

		this.state = {
			modalIsOpen: false,
			width: 0,
			activeIndex: null,
			isActive: false
		};
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({width: window.innerWidth});
	}

	handleClick() {
		this.setState({modalIsOpen: true});
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	toggleButton = index => {
		console.log('cliked');
		this.setState({ activeIndex: index });
		console.log(this.state.activeIndex);
	};

	render() {
		return (
			<div className="hotel__container">
				<div className="hotel__image-container">
					<HotelImage onClick={this.handleClick} image={this.props.data.image}/>
					<OptionModal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} value={this.props}/>
				</div>
				<HotelLink hotelName={this.props.data.hotel_name} id={this.props.data.id}/>
				<HotelRating rate={this.props.data.rate}/>
				<Button index={this.props.index}
						activeIndex={this.state.activeIndex === this.props.index}
						onClick={this.toggleButton}
				/>
				{/*<div className="hotel__details--more">*/}
					{/*<button className="btn btn--more">More</button>*/}
				{/*</div>*/}
				<HotelDescription/>
				<HotelPrice/>
			</div>
		)
	}
}

export default Hotel;