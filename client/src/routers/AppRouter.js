import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import SingleHotel from '../components/SingleHotel/SingleHotel';
import App from "../App";
import Navigation from '../components/Navigation/Navigation';
import {Header} from '../components/Header/Header';
import AddHotelNew from "../components/AddHotel/AddHotelNew";
import {Cart} from '../components/Cart/Cart';
import {BuyHotel} from '../components/BuyHotel/BuyHotel';
import Footer from '../components/Footer/Footer';
import NoMatch404 from '../components/404/NoMatch404';
import {connect} from "react-redux";
import * as actions from "../actions";
import AddHotelSuccess from "../components/AddHotel/AddHotelSuccess";
import Forbidden from "../components/Forbidden/Forbidden";

const PrivateRoute = ({component: Component, ...rest}) => {
	const fakeAuth = {
		isAuthenticated: rest.isAuth
	};
	return (
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
	)
};

class AppRouter extends React.Component {
	componentDidMount() {
		this.props.fetchHotels();
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Header/>

					<Route path="/" component={App} exact/>
					<Route path="/hotel/:id"
					       render={(props) => <SingleHotel {...props} />}
					/>
					<Route path="/cart" component={Cart}/>
					<Route path="/buy" component={BuyHotel} exact/>

					<PrivateRoute path="/add" component={AddHotelNew} isAuth={this.props.auth} exact/>
					<Route path="/forbidden" component={Forbidden}/>
					<Route path="/add/success" component={AddHotelSuccess}/>
					{/*<Route component={NoMatch404}/>*/}

					<Footer/>
				</div>
			</BrowserRouter>
		)
	}
}

function mapStateToProps({auth}) {
	return {
		auth
	};
}

export default connect(mapStateToProps, actions)(AppRouter);
