import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import SingleQuestion from '../components/SingleQuestion';
import App from "../App";
import Navigation from '../components/Navigation/Navigation';
import {Cart} from '../components/Cart/Cart';
import {BuyHotel} from '../components/BuyHotel/BuyHotel';
import {AddHotel} from '../components/AddHotel/AddHotel';
import Footer from '../components/Footer/Footer';
import NoMatch404 from '../components/404/NoMatch404';
import app_data from '../app_data';

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

		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.setState({isLoading: true});

		// Temp to see Loading
		// setInterval(() => {

		fetch('/hotels', {
			method: 'GET'
		}).then(response => response.json())
			.then((data) => {
				this.setState({data: data.hotels, isLoading: false});
			}).catch(err => {
			if (err.status !== 200) {
				console.error('[Fetch Error :-S]', err);
			}
		});

		// }, 5000);
	}

	render() {
		const appData = this.state.data;

		return (
			<BrowserRouter>
				<div>
					<Navigation/>

					<Route path="/" component={App} exact={true}/>
					<Route path="/hotel/:id"
					       render={(props) => <SingleQuestion {...props} appData={appData}/>}
					/>
					<Route path="/cart" component={Cart}/>
					<Route path="/buy" component={BuyHotel}/>

					<PrivateRoute path="/add" component={AddHotel}/>
					<Route path="/forbidden" component={NotAuthenticate} />

					<Footer/>
				</div>
			</BrowserRouter>
		)
	}
}

export default AppRouter;