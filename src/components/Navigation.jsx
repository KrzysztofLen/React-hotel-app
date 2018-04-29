import React, {Component} from 'react';
import {BrowserRouter, NavLink, Link, Route, Router, Switch, Redirect} from 'react-router-dom';
import App from "../App";
import {BuyHotel} from "./BuyHotel/BuyHotel";

class LinkHotel extends React.Component {
	constructor(props) {
		super(props);
		this.onSetActiveIndex = this.onSetActiveIndex.bind(this);
	}

	onSetActiveIndex = () => {
		this.props.onClick(this.props.index);
	};

	componentDidMount() {
		console.log(window.location.href.split("/").pop());
		console.log(this.props.path.split("/").pop());
	}

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
		console.log('Active index', this.props.activeIndex);
		return <React.Fragment>
				<li className={this.props.activeIndex ? "side-nav__item side-nav__item--active" : "side-nav__item"}
				    onClick={this.onSetActiveIndex}>
					<NavLink to={`${this.props.path}`} className="side-nav__link">
						<span>{this.props.link}</span>
					</NavLink>
				</li>
			</React.Fragment>
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
		console.log(index);
		this.setState({
			activeIndex: index
		});
	};

	render() {
		// return (
			{/*<nav className="sidebar">*/}
		return (	<ul className="side-nav">
					{routes.map((route, index) => {
						// return <React.Fragment>
						// <LinkHotel key={index} index={index} onClick={this.onSetActiveIndex}
						//                   activeIndex={this.state.activeIndex === index} {...route}/>
						// </React.Fragment>
						return <li className={this.state.activeIndex === index ? "side-nav__item side-nav__item--active" : "side-nav__item"}
						onClick={this.onSetActiveIndex.bind(this, index)}>
					<NavLink to={`${route.path}`} className="side-nav__link">
							<span>{route.link}</span>
					</NavLink>
					</li>
					})}
					{/* TEMPORARY */}
					{/*<li className="side-nav__item side-nav__item--active">*/}
						{/*<a href="/add" className="side-nav__link">*/}
							{/*<span>Add hotel</span>*/}
						{/*</a>*/}
					{/*</li>*/}
					{/* =======*/}
				</ul>)

					{/*return <Route key={index} path={route.path} exact={route.exact} component={route.sidebar}/>*/}
				{/*</Switch>*/}
				{/*<div className="legal">*/}
					{/*&copy; 2017 by Trillo. All rights reserved.*/}
				{/*</div>*/}
			{/*</nav>*/}
		// )
	}
}

Navigation.defaultProps = {
	navlinks: [
		{
			link: "Hotel's",
			path: "/"
		},
		{
			link: "Buy Hotel",
			path: "/buy"
		},
		{
			link: "Cart",
			path: "/cart"
		},
		{
			link: "Add Hotel",
			path: "/add"
		}
	]
};
const routes = [
	{
		link: "Hotel's",
		exact: true,
		path: "/",
		sidebar: App
	},
	{
		link: "Buy Hotel",
		path: "/buy",
		sidebar: BuyHotel
	},
	{
		link: "Cart",
		path: "/cart"
	},
	{
		link: "Add Hotel",
		path: "/add"
	}
];


export default Navigation;