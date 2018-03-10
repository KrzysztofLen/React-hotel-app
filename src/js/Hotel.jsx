import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import OptionModal from './Modal';

import HotelImage from './HotelImage';

const Name = (data) => <h3 className="name">{data.name}</h3>;
const HotelLink = (data) => {
	console.log(data);
	return (
		<NavLink to={"/question/" + data.id} className="question">{data.hotelName}</NavLink>
	)
}

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
		console.log(this.props.data.image);
		return (
			<div className="hotel__container">
				<div className="hotel__image-container">
					<HotelImage onClick={this.handleClick} image={this.props.data.image} />
					<OptionModal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} value={this.props}/>
					{/*<span className="question__asking">ASKED</span>*/}
				</div>
				<div className="hotel__details--name">
					<HotelLink hotelName={this.props.data.question} id={this.props.data.id}/>
				</div>
				<div className="hotel__details--rate">
					5 star
				</div>
				<div className="hotel__details--more">
					<button>More</button>
				</div>
				<div className="hotel__details--description">
					Lorem ipsum dolor sit amet
				</div>
				<div className="holel__details--price">
					$599
				</div>
				{/*<Panel {...this.props} />*/}
			</div>
		)
	}
}

export default Hotel;