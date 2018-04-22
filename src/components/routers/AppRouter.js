import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

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


const AppRouter = () => {
	const appData = app_data;

	return <BrowserRouter>
		<div>
			<Switch>
				<Route path="/" component={App} exact={true}/>
				<Route path="/hotel/:id"
					render={(props) => <SingleQuestion {...props} appData={appData} />}
				/>
				<Route path="/cart" component={Cart} />
				<Route path="/buy" component={BuyHotel} />
				<Route path="/add" component={AddHotel} />
				{/*<PrivateRoute path="/add" component={AddHotel} />*/}
			</Switch>
		</div>
	</BrowserRouter>
};

export default AppRouter;