import React from 'react';
import HotelRating from '../HotelRating/HotelRating';

interface IProps {
	hotel_name: string,
	hotel_stars: number,
	hotel_city: string,
	hotel_province: string,
	hotel_rating: number,
	hotel_reviews: number
}

export const HotelOverview = (props: IProps) => {
	return (
		<div className="overview">
			<h1 className="overview__heading">
				{props.hotel_name}
			</h1>
			<div className="overview__stars">
				<HotelRating rate={props.hotel_stars}/>
			</div>

			<div className="overview__location">
				<button className="inline">{props.hotel_city}, {props.hotel_province}</button>
			</div>

			<div className="overview__rating">
				<div className="overview__rating-average">{props.hotel_rating}</div>
				<div className="overview__rating-count">{props.hotel_reviews} votes</div>
			</div>
		</div>
	)
};