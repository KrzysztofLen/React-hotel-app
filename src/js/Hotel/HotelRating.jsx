import React, {Component} from 'react';

class HotelRating extends Component {
	constructor(props) {
		super(props);

		this.state = {
			indicator: [true, true, true, false, false]
		}
	}

	render() {
		console.log(this.props.rate);
		const item = true;
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