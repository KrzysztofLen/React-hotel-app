import React, {Component} from "react";
import PropTypes from "prop-types";
import StarOutlined from './StarOutlined';
import StarFullFilled from './StarFullFilled';

class Rating extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: props.defaultValue,
			max: props.max,
			indicator: []
		};
	}

	componentDidMount() {
		this.setState({
			indicator: [...Array(this.props.max).fill(false)]
		});
	}

	onSetTempRate(rating) {
		this.setState({
			indicator: this.setIndicator(rating)
		});
	};

	onSetRating(rating) {
		this.setState({
			rating: rating
		});
	}

	setIndicator(rating) {
		return [...Array(rating + 1).fill(true), ...Array(this.state.max - rating - 1).fill(false)]
	};

	render() {
		console.log(this.state.rating);
		const fillStar = "#BA265D";
		return (
			<div className="rating">
				{this.state.indicator.map((item, idx) => {
					return (
						<div key={idx} className={"icon icon-" + (item ? "star" : "star-outlined")}
						     onMouseOver={this.onSetTempRate.bind(this, idx)}
							 onClick={this.onSetRating.bind(this, idx)}>
							 {item ? <StarFullFilled fill={fillStar}/> : <StarOutlined fill={fillStar}/>}
						</div>
					);
				})}
			</div>
		);
	}
}

Rating.propTypes = {
	/** defaultValue. */
	defaultValue: PropTypes.number,
	/** max value. */
	max: PropTypes.number
};

Rating.defaultProps = {
	/** Description of prop "defaultValue". */
	defaultValue: 0,
	/** Description of prop "max value". */
	max: 5
};

export default Rating;
