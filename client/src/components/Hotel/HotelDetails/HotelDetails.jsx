import React from 'react';
import HotelFacilities from "../HotelFacilities/HotelFacilities";

export const HotelDetails = (props) => {
	return (
		<div className={"details"}>
			<div className="content__header-wrapper">
				<h1 className="view-header">Description:</h1>
			</div>
			<div className="detail">
				<div className="description">
					<p className="paragraph">{props.hotel_description}</p>
					<ul className="list">
						<li className="list__item">Close to the beach</li>
						<li className="list__item">Breakfast included</li>
						<li className="list__item">Free airport shuttle</li>
						<li className="list__item">Free wifi in all rooms</li>
						<li className="list__item">Air conditioning and heating</li>
						<li className="list__item">Pets allowed</li>
						<li className="list__item">We speak all languages</li>
						<li className="list__item">Perfect for families</li>
					</ul>
					<div className="recommend">
						<p className="recommend__count">
							Lucy and 3 other friends recommend this hotel
						</p>
						<div className="recommend__friends">
							{/*<img src={user3} alt="Friend 1" className="recommend__photo"/>*/}
							{/*<img src="../../assets/img/user-4.jpg" alt="Friend 2" className="recommend__photo"/>*/}
							{/*<img src="../../assets/img/user-5.jpg" alt="Friend 3" className="recommend__photo"/>*/}
							{/*<img src="../../assets/img/user-6.jpg" alt="Friend 4" className="recommend__photo"/>*/}
						</div>
					</div>
				</div>
				<div className="user-reviews">
					<figure className="review">
						<blockquote className="review__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta
							animi, totam, itaque officia ex.
						</blockquote>
						<figcaption className="review__user">
							{/*<img src="../../assets/img/user-1.jpg" alt="user 1" className="review__photo"/>*/}
							<div className="review__user-box">
								<p className="review__user-name">Nick Smith</p>
								<p className="review__user-date">Feb 23rd, 2017</p>
							</div>
							<div className="review__rating">7.8</div>
						</figcaption>
					</figure>

					<figure className="review">
						<blockquote className="review__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta
							animi.
						</blockquote>
						<figcaption className="review__user">
							{/*<img src="../../assets/img/user-2.jpg" alt="user 2" className="review__photo"/>*/}
							<div className="review__user-box">
								<p className="review__user-name">Mary Thomas</p>
								<p className="review__user-date">Sept 13th, 2017</p>
							</div>
							<div className="review__rating">9.3</div>
						</figcaption>
					</figure>

					<button className="btn btn--inline">Show all <span>&rarr;</span></button>
				</div>
			</div>
			<HotelFacilities {...props} withDescription={true} />
		</div>
	)
}
