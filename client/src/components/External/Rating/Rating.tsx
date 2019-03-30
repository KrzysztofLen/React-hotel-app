import React, {Component} from "react";
import StarOutlined from './StarOutlined';
import StarFullFilled from './StarFullFilled';

interface IProps {
	max: number
}

interface IState {
    rating: number,
    max: number,
    indicator: Array<boolean>
}

class Rating extends Component<IProps, IState> {
    static defaultProps = {
        defaultValue: 0,
        max: 5
    };

	constructor(props: IProps) {
		super(props);

		this.state = {
			rating: Rating.defaultProps.defaultValue,
			max: Rating.defaultProps.max,
			indicator: []
		};
	}

	componentDidMount() {
		this.setState({
			indicator: [...Array(this.props.max).fill(false)]
		});
	}

	onSetTempRate(rating: number) {
		this.setState({
			indicator: this.setIndicator(rating)
		});
	};

	onSetRating(rating: number) {
		this.setState({
			rating: rating
		});
	}

	setIndicator(rating: number) {
		return [...Array(rating + 1).fill(true), ...Array(this.state.max - rating - 1).fill(false)]
	};

	render() {
		const fillStar: string = "#BA265D";

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

export default Rating;
