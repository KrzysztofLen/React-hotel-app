import React from 'react';
import {BrowserRouter, Route, Router, Switch, NavLink, Redirect} from 'react-router-dom';

import SingleQuestion from './../SingleQuestion';
import App from "../../App";
import Navigation from '../Navigation';
import {Cart} from './../Cart/Cart';
import {BuyHotel} from './../BuyHotel/BuyHotel';
import {AddHotel} from './../AddHotel/AddHotel';
import app_data from '../../app_data';

//TODO Make private route with addHotel component
const fakeAuth = {
	isAuthenticated: false
};

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			fakeAuth.isAuthenticated ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/",
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);

const AppRouter1 = () => {
	const appData = app_data;

	return <BrowserRouter>
		<div>

				<Route path="/" component={App} exact={true}/>
				<Route path="/hotel/:id"
					render={(props) => <SingleQuestion {...props} appData={appData} />}
				/>
				<Route path="/cart" component={Cart} />
				<Route path="/buy" component={BuyHotel} />
				<Route path="/add" component={AddHotel} />
				{/*<PrivateRoute path="/add" component={AddHotel} />*/}

		</div>
	</BrowserRouter>
};


class AppRouter extends React.Component {
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
		const appData = app_data;
		return (
			<BrowserRouter>
			<nav className="sidebar">
				<Navigation/>
				{/*<ul className="side-nav">*/}
					{/*{routes.map((route, index) => {*/}
						{/*// return <React.Fragment>*/}
						{/*// <LinkHotel key={index} index={index} onClick={this.onSetActiveIndex}*/}
						{/*//                   activeIndex={this.state.activeIndex === index} {...route}/>*/}
						{/*// </React.Fragment>*/}
						{/*return <li className={this.state.activeIndex === index ? "side-nav__item side-nav__item--active" : "side-nav__item"}*/}
						           {/*onClick={this.onSetActiveIndex.bind(this, index)}>*/}
							{/*<NavLink to={`${route.path}`} className="side-nav__link">*/}
								{/*<span>{route.link}</span>*/}
							{/*</NavLink>*/}
						{/*</li>*/}
					{/*})}*/}
					{/*/!* TEMPORARY *!/*/}
					{/*/!*<li className="side-nav__item side-nav__item--active">*!/*/}
					{/*/!*<a href="/add" className="side-nav__link">*!/*/}
					{/*/!*<span>Add hotel</span>*!/*/}
					{/*/!*</a>*!/*/}
					{/*/!*</li>*!/*/}
					{/*/!* =======*!/*/}
				{/*</ul>*/}

				<Route path="/" component={App} exact={true}/>
				<Route path="/hotel/:id"
				       render={(props) => <SingleQuestion {...props} appData={appData} />}
				/>
				<Route path="/cart" component={Cart} />
				<Route path="/buy" component={BuyHotel} />
				<Route path="/add" component={AddHotel} />
				{/*<Route key={index} path={route.path} exact={route.exact} component={route.sidebar}/>*/}

				{/*</Switch>*/}
				<div className="legal">
					&copy; 2017 by Trillo. All rights reserved.
				</div>
			</nav>
			</BrowserRouter>
		)
	}
}

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


export default AppRouter;