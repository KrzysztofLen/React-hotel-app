import React, {Component} from 'react';

import {HotelLink} from './Navigation/HotelLink';
import {AddHotel} from './Navigation/AddHotel';
import {BuyHotel} from './Navigation/BuyHotel';
import {Cart} from './Navigation/Cart';
import {Link} from 'react-router-dom';

const numbers = [
	{
		link: "Hotel's",
		href: "/"
	},
	{
		link: "Buy Hotel",
		href: "/buy"
	},
	{
		link: "Cart",
		href: "/cart"
	},
	{
		link: "Add Hotel",
		href: "/add"
	}
];

class LinkHotel extends React.Component {
	constructor(props) {
		super(props);
		this.onSetActiveIndex = this.onSetActiveIndex.bind(this);
	}

	onSetActiveIndex() {
		this.props.onClick(this.props.index);
	};

	render() {
		console.log(this.props);
		// debugger;
		return <React.Fragment>
			<li className={this.props.activeIndex ? "side-nav__item side-nav__item--active" : "side-nav__item"}
			    onClick={this.onSetActiveIndex}>
				<Link to={`${this.props.href}`} className="side-nav__link">
					<span>{this.props.link}</span>
				</Link>
			</li>
		</React.Fragment>
	}
}

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.onSetActiveIndex = this.onSetActiveIndex.bind(this);

		this.state = {
			activeIndex: 0
		}
	}

	onSetActiveIndex = (idx) => {
		this.setState({activeIndex: idx});
		// console.log(this.state.activeIndex);
	};

	render() {
		return (
			<nav className="sidebar">
				<ul className="side-nav">
					{numbers.map((child, idx) => {
						return <LinkHotel key={idx} index={idx} {...child} onClick={this.onSetActiveIndex}
						                  activeIndex={this.state.activeIndex === idx}/>
					})}

				</ul>

				<div className="legal">
					&copy; 2017 by Trillo. All rights reserved.
				</div>
			</nav>
		)
	}
}

export default Navigation;