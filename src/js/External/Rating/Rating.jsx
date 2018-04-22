import React, {Component} from "react";
import PropTypes from "prop-types";
import StarOutlined from './StarOutlined';
import StarFullFilled from './Star';

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

	setIndicator(rating) {
		return [...Array(rating + 1).fill(true), ...Array(this.state.max - rating - 1).fill(false)]
	};

	render() {
		const fillStar = "#BA265D";
		return (
			<div className="rating">
				{this.state.indicator.map((item, idx) => {
					return (
						<div key={idx} className={"icon icon-" + (item ? "star" : "star-outlined")}
						     onMouseOver={this.onSetTempRate.bind(this, idx)}>
							{item ? <StarFullFilled fill={fillStar}/> : <StarOutlined fill={fillStar}/>}
						</div>
					);
				})}
			</div>
		);
	}
}

Rating.propTypes = {
	defaultValue: PropTypes.number,
	max: PropTypes.number
};

Rating.defaultProps = {
	defaultValue: 0,
	max: 5
};

export default Rating;
