import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import SingleQuestion from './../SingleQuestion';
import App from "../../App";
import Navigation from '../Navigation/Navigation';
import {Cart} from './../Cart/Cart';
import {BuyHotel} from './../BuyHotel/BuyHotel';
import {AddHotel} from './../AddHotel/AddHotel';
import NoMatch404 from './../404/NoMatch404';
import app_data from '../../app_data';

//TODO Make private route with addHotel component
const fakeAuth = {
	isAuthenticated: false
};

class NotAuthenticate extends React.Component {
	render() {
		// debugger;
		const { from } = this.props.location.state || { from: { pathname: "/" } };
		return (
			<div className="container">
				<p>You must log in to view the page at {from.pathname}</p>
				<button onClick={() => alert('forbidden')}>Log in</button>
			</div>
		);
	}
}

const PrivateRoute = ({component: Component, ...rest}) => (
	<Route
		{...rest}
		render={props =>
			fakeAuth.isAuthenticated ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/forbidden",
						state: {from: props.location}
					}}
				/>
			)
		}
	/>
);

class AppRouter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const appData = app_data;
		return (
			<BrowserRouter>
				<nav className="sidebar">
					<Navigation/>

					<Route path="/" component={App} exact={true}/>
					<Route path="/hotel/:id"
					       render={(props) => <SingleQuestion {...props} appData={appData}/>}
					/>
					<Route path="/cart" component={Cart}/>
					<Route path="/buy" component={BuyHotel}/>

					<PrivateRoute path="/add" component={AddHotel}/>
					<Route path="/forbidden" component={NotAuthenticate} />

					{/*<Route component={NoMatch404} />*/}
					<div className="legal">
						&copy; 2017 by Trillo. All rights reserved.
					</div>
				</nav>
			</BrowserRouter>
		)
	}
}

export default AppRouter;