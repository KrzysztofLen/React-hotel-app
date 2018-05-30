import React, {Component} from 'react';

class HotelOpinion extends Component {
	constructor(props) {
		super(props);
	}

	range() {
		const rate = this.props.hotelRating;
		let ratingLevel;

		switch (true) {
			case (0 <= rate && rate < 2):
				ratingLevel = 'Very Bad';
				break;
			case (2 <= rate && rate < 4):
				ratingLevel = 'Poor';
				break;
			case (4 <= rate && rate < 6):
				ratingLevel = 'Fair';
				break;
			case (6 <= rate && rate < 7):
				ratingLevel = 'Good';
				break;
			case (7 <= rate && rate < 9):
				ratingLevel = 'Very Good';
				break;
			case (9 <= rate && rate <= 10):
				ratingLevel = 'Excellent';
				break;
			default:
				break;
		}
		return ratingLevel;
	}

	render() {
		return (

			<React.Fragment>
				<span className={'rate__color rate__color--' + this.range().replace(/ +/g, "").toLowerCase()}>{this.range()}</span>
				<span className="opinion__hotel-rating">{this.props.hotelRating}</span><span className="opinion__hotel-reviews">({this.props.hotelReviews})</span>
			</React.Fragment>
		)
	}
}

export default HotelOpinion;