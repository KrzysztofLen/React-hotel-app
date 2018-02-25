import React, {Component} from 'react';

class HotelLink extends Component {
	render() {
		return (
			<li className="side-nav__item side-nav__item--active">
				<a href="#" className="side-nav__link">
					<svg className="side-nav__icon">
						<use xlinkHref="img/sprite.svg#icon-home"></use>
					</svg>
					<span>Hotel</span>
				</a>
			</li>
		)
	}
}

const Navigation = () => {
	return (
		<nav className="sidebar">
			<ul className="side-nav">
				<li className="side-nav__item side-nav__item--active">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-home"></use>
						</svg>
						<span>Hotel</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-aircraft-take-off"></use>
						</svg>
						<span>Flight</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-key"></use>
						</svg>
						<span>Car rental</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use xlinkHref="img/sprite.svg#icon-map"></use>
						</svg>
						<span>Tours</span>
					</a>
				</li>
			</ul>

			<div className="legal">
				&copy; 2017 by Trillo. All rights reserved.
			</div>
		</nav>
	)
};

export default Navigation;