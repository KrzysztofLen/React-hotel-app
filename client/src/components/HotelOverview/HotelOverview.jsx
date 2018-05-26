import React from 'react';
import HotelRating from '../Hotel/HotelRating';

export const HotelOverview = (props) => {
	console.log(props);
	return (
		<div className="overview">
			<h1 className="overview__heading">
				{props.hotel_name}
			</h1>
			<div className="overview__stars">
				<HotelRating rate={props.hotel_stars}/>
				{/*<svg className="overview__icon-star">*/}
					{/*<use xlink:href="img/sprite.svg#icon-star"></use>*/}
				{/*</svg>*/}
				{/*<svg className="overview__icon-star">*/}
					{/*<use xlink:href="img/sprite.svg#icon-star"></use>*/}
				{/*</svg>*/}
				{/*<svg className="overview__icon-star">*/}
					{/*<use xlink:href="img/sprite.svg#icon-star"></use>*/}
				{/*</svg>*/}
				{/*<svg className="overview__icon-star">*/}
					{/*<use xlink:href="img/sprite.svg#icon-star"></use>*/}
				{/*</svg>*/}
				{/*<svg className="overview__icon-star">*/}
					{/*<use xlink:href="img/sprite.svg#icon-star"></use>*/}
				{/*</svg>*/}
			</div>

			<div className="overview__location">
				{/*<svg className="overview__icon-location">*/}
					{/*<use xlink:href="img/sprite.svg#icon-location-pin"></use>*/}
				{/*</svg>*/}
				<button className="btn btn--inline">{props.hotel_city}, {props.hotel_province}</button>
			</div>

			<div className="overview__rating">
				<div className="overview__rating-average">8.6</div>
				<div className="overview__rating-count">429 votes</div>
			</div>
		</div>
	)
};