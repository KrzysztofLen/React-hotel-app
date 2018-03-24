import React, {Component} from 'react';
import OptionModal from './Modal';

import HotelImage from './HotelImage';
import HotelLink from './HotelLink';
import Rating from './Hotel/Rating';

const Name = (data) => <h3 className="name">{data.name}</h3>;

const MoreActivities = (data) => (
	<div className="more-activities__panel">
		<span className="more-activities__number">{data.data.activities_number}</span>
		<span className="more-activities__text">more activities</span>
	</div>
);

const Commented = (props) => (
	<div className="person-panel">
		<img className="person__avatar" src="http://via.placeholder.com/50x50" alt=""/>
		<span className="person__asking">COMMENTED</span>
	</div>
);

const Panel = ({data}) => {
	return (
		<div className="panel">
			<HotelLink {...data} />
		</div>
	)
};

class Hotel extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.state = {
			modalIsOpen: false,
			width: 0
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
		this.setState({ width: window.innerWidth });
	}

	handleClick() {
		this.setState({modalIsOpen: true});
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	render() {
		return (
			<div className="hotel__container">
				<div className="hotel__image-container">
					<HotelImage onClick={this.handleClick} image={this.props.data.image} />
					<OptionModal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} value={this.props}/>
				</div>
				<div className="hotel__details--name">
					<HotelLink hotelName={this.props.data.hotel_name} id={this.props.data.id}/>
				</div>
				<div className="hotel__details--rate">
					<Rating rate={this.props.data.rate} />
					{/*<i className={(item ? "fas" : "far") + " fa-star"}></i>*/}
					{/*<i className="fas fa-star"></i>*/}
					{/*<i className="far fa-star"></i>*/}
				</div>
				<div className="hotel__details--more">
					<button className="btn btn--more">More</button>
				</div>
				<div className="hotel__details--description">
					<p className="hotel__details--text">Lorem ipsum dolor sit amet</p>
				</div>
				<div className="hotel__details--price">
					<span>$</span>599
				</div>
			</div>
		)
	}
}

export default Hotel;