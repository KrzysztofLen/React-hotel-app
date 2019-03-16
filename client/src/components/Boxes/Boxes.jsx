// @flow
import * as React from 'react';
import {connect} from "react-redux";
import {switchView} from "../../Redux/actions";

type Props = {
	hotelsNumberInDatabase: number
}

class Boxes extends React.Component<Props> {
	getOpinions = () => {
		let opinions: number = 0;

		this.props.hotelsList.map(({hotel_reviews}) => {
			opinions += hotel_reviews;
		});

		return opinions;
	}

	getFiveStarsHotels = () => {
		const fiveStarsHotels = this.props.hotelsList.filter((hotel: Object) => {
			return hotel.hotel_stars === 5;
		});

		return fiveStarsHotels.length;
	}

	getNewHotels = () => {
		const newHotel: Array<Object> = [];

		this.props.hotelsList.map((hotel: Object) => {
			const isNew = (hotel.is_new) ? Date.now() - parseInt(hotel.is_new, 10) : 0;
			const isNewDuration: number = 24 * 60 * 60 * 1000 * 7; // 7 days
			(isNew >= isNewDuration || isNew === 0) ? false : newHotel.push(hotel);
		});

		return newHotel.length;
	}

	render() {
		const boxesContent: Array<mixed> = [
			{
				title: "Total HotelsView:",
				value: this.props.hotelsNumberInDatabase
			},
			{
				title: "5 star's HotelsView:",
				value: this.getFiveStarsHotels()
			},
			{
				title: "Opinions:",
				value: this.getOpinions()
			},
			{
				title: "New hotel's:",
				value: this.getNewHotels()
			}
		];

		return (
			<React.Fragment>
				<div className={"box__container"}>
					{boxesContent.map((boxContent: Object, index: number) => {
						return (
							<div key={index} className={`box box--${index + 1}`}>
								<div className={"box__content"}>
									<div className={`box__icon box__icon--${index + 1}`}/>
									<div className={"box__text"}>
										<span className={"box__text--value"}>{boxContent.value}</span>
										<span className={"box__text--title"}>{boxContent.title}</span>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</React.Fragment>
		)
	}
}

interface IHotelLength {
	hotelsNumberInDatabase: number,
	hotelsList: Array<Object>
}

function mapStateToProps({hotelsNumberInDatabase, hotelsList}): IHotelLength {
	return {
		hotelsNumberInDatabase,
		hotelsList
	}
}

export default connect(mapStateToProps, switchView)(Boxes);