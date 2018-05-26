import React from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0
		};
	}

	onSetActiveIndex = (index) => {
		this.setState({
			activeIndex: index
		});
	};

	render() {
		return (
			<nav className="sidebar">
				<ul className="side-nav">
					{this.props.navlinks.map((element, index) => {
						return (
							<li key={index}
							    className={this.state.activeIndex === index ? "side-nav__item side-nav__item--active" : "side-nav__item"}
							    onClick={this.onSetActiveIndex.bind(this, index)}>
								<NavLink to={`${element.path}`} className="side-nav__link">
									<span>{element.link}</span>
								</NavLink>
							</li>
						)
					})}
				</ul>
			</nav>
		)
	}
}

Navigation.defaultProps = {
	navlinks: [
		{
			link: "HotelRating's",
			path: "/"
		},
		{
			link: "Buy HotelRating",
			path: "/buy"
		},
		{
			link: "Cart",
			path: "/cart"
		},
		{
			link: "Add HotelRating",
			path: "/add"
		}
	]
};

export default Navigation;