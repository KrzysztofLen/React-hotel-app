import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import SingleHotel from '../components/SingleHotel/SingleHotel';
import App from "../App";
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
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
		const {from} = this.props.location.state || {from: {pathname: "/"}};
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

		fetch('/hotels', {
			method: 'GET'
		}).then(response => response.json())
			.then((data) => {
				this.setState({data: data.hotels});
			}).catch(err => {
			if (err.status !== 200) {
				console.error('[Fetch Error :-S]', err);
			}
		});

	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Header title="Question" options={false}/>

					<Route path="/" component={App} exact={true}/>
					<Route path="/hotel/:id"
					       render={(props) => <SingleHotel {...props} appData={this.state.data}/>}
					/>
					<Route path="/cart" component={Cart}/>
					<Route path="/buy" component={BuyHotel}/>

					<PrivateRoute path="/add" component={AddHotel}/>
					<Route path="/forbidden" component={NotAuthenticate}/>

					<Footer/>
				</div>
			</BrowserRouter>
		)
	}
}

export default AppRouter;