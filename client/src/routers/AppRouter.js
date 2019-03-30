import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import HotelsView from "../Views/HotelsView/HotelsView";
import SingleHotelView from '../Views/SingleHotelView/SingleHotelView';
import Navigation from '../components/Navigation/Navigation.tsx';
import AddHotelsView from "../Views/AddHotelsView/AddHotelsView";
import {Cart} from '../components/Cart/Cart';
import {BuyHotel} from '../components/BuyHotel/BuyHotel';
import {connect} from "react-redux";
import * as actions from "../Redux/actions";
import AddHotelSuccess from "../components/AddHotel/AddHotelSuccess";
import Forbidden from "../components/Forbidden/Forbidden";
import AddHotelReview from "../components/AddHotel/AddHotelReview";

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
	render() {
		return (
			<BrowserRouter>
				<div className={"hotel-app"}>
					<Navigation/>
					{/*<Header/>*/}
					{/* TODO make onEnter fetch data on particular view/route */}
					{/*<Route path="/" component={App} exact/>*/}
					<Route path="/" component={HotelsView} exact/>
					{/*<Route path="/hotel/:id"*/}
					       {/*render={(props) => <SingleHotel {...props} />}*/}
					{/*/>*/}

					<Route path={"/hotel/:id"} component={SingleHotelView} />
					<Route path="/reservation" component={Cart}/>
					<Route path="/buy" component={BuyHotel} exact/>

					{/* #TODO commented for development time */}
					{/*<PrivateRoute path="/add" component={AddHotelsView} isAuth={this.props.currentUserAuth} exact/>*/}
					<Route path="/add" component={AddHotelsView} />
					<Route path="/send" component={AddHotelReview} />
					<Route path="/forbidden" component={Forbidden}/>
					<Route path="/add/success" component={AddHotelSuccess}/>
					{/*<Route component={NoMatch404}/>*/}

					{/*<Footer/> */}
				</div>
			</BrowserRouter>
		)
	}
}

function mapStateToProps({currentUserAuth}) {
	return {
		currentUserAuth
	};
}

export default connect(mapStateToProps, actions)(AppRouter);
