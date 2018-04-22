import React, {Component} from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';

class LinkHotel extends React.Component {
	constructor(props) {
		super(props);
		this.onSetActiveIndex = this.onSetActiveIndex.bind(this);
	}

	onSetActiveIndex = () => {
		this.props.onClick(this.props.index);
	};

	// render() {
	// 	return <React.Fragment>
	// 		<li className={this.props.activeIndex ? "side-nav__item side-nav__item--active" : "side-nav__item"} onClick={this.onSetActiveIndex}>
	// 		     {/*onClick={this.onSetActiveIndex}>*/}
	// 			{/*<Link to={`${this.props.href}`} className="side-nav__link">*/}
	// 				{/*<span>{this.props.link}</span>*/}
	// 			{/*</Link>*/}
	// 			<a href="#" className="side-nav__link">
	// 				<span>{this.props.link}</span>
	// 			</a>
	// 		</li>
	// 	</React.Fragment>
	// }

	//TODO Navigation routing
	render() {
		return <BrowserRouter>
			<React.Fragment>
				<li className={this.props.activeIndex ? "side-nav__item side-nav__item--active" : "side-nav__item"}
				    onClick={this.onSetActiveIndex}>
					<NavLink to={`${this.props.href}`} className="side-nav__link">
						<span>{this.props.link}</span>
					</NavLink>
				</li>
			</React.Fragment>
		</BrowserRouter>
	}
}

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.onSetActiveIndex = this.onSetActiveIndex.bind(this);

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
					{this.props.navlinks.map((child, index) => {
						return <LinkHotel key={index} index={index} onClick={this.onSetActiveIndex}
						                  activeIndex={this.state.activeIndex === index} {...child}/>
					})}
					{/* TEMPORARY */}
					<li className="side-nav__item side-nav__item--active">
						<a href="/add" className="side-nav__link">
							<span>Add hotel</span>
						</a>
					</li>
					{/* =======*/}
				</ul>

				<div className="legal">
					&copy; 2017 by Trillo. All rights reserved.
				</div>
			</nav>
		)
	}
}

Navigation.defaultProps = {
	navlinks: [
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
		// {
		// 	link: "Add Hotel",
		// 	href: "/add"
		// }
	]
};

export default Navigation;