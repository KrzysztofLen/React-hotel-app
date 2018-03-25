import React, {Component} from 'react';

class HotelRating extends Component {
	constructor(props) {
		super(props);

		this.state = {
			max: 5,
			rating: null,
			indicator: []
		}
	}

	componentDidMount = () => {
		const rate = this.props.rate;
		this.setState({rating: rate});
		this.setIndicator();
	};

	setIndicator = () => {
		this.setState({
			indicator: this.makeIndicator(this.props.rate, this.state.max)
		})
	};

	makeIndicator = (rating, max) => {
			return [...Array(rating).fill(true), ...Array(max - rating).fill(false)]
	};

	render() {
		return (
			<div className="hotel__details--rate">
				{this.state.indicator.map((item, i) => {
					return (
						<i key={i}
						   className={(item ? "fas" : "far") + " fa-star"}></i>
					)
				})}
			</div>
		)
	}
}

export default HotelRating;