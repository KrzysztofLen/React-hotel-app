import React, {Component} from 'react';

class Rating extends Component {
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
			<React.Fragment>
				{this.state.indicator.map((item, i) => {
					return (
						<i key={i}
						   className={(item ? "fas" : "far") + " fa-star"}></i>
					)
				})}
			</React.Fragment>
		)
	}
}

export default Rating;