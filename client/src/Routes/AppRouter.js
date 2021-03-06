import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import HotelsView from '../Views/HotelsView/HotelsView';
import SingleHotelView from '../Views/SingleHotelView/SingleHotelView';
import Navigation from '../components/Navigation/Navigation.tsx';
import AddHotelsView from '../Views/AddHotelsView/AddHotelsView';
import BuyHotelsView from '../Views/BuyHotelsView/BuyHotelsView';
import ReservationsView from '../Views/ReservationsView/ReservationsView';
import ProfileView from '../Views/ProfileView/ProfileView';
import { connect } from 'react-redux';
// import * as actions from "../Redux/actions";
import AddHotelSuccess from '../components/AddHotel/AddHotelSuccess';
import Forbidden from '../components/Forbidden/Forbidden';
import AddHotelReview from '../components/AddHotel/AddHotelReview';
import NoMatch from '../components/NoMatch/NoMatch';

//# TODO with correct auth system one route is available after login
// const PrivateRoute = ({component: Component, ...rest}) => {
// 	const fakeAuth = {
// 		isAuthenticated: rest.isAuth
// 	};
//
// 	return (
// 		<Route
// 			{...rest}
// 			render={props =>
// 				fakeAuth.isAuthenticated ? (
// 					<Component {...props} />
// 				) : (
// 					<Redirect
// 						to={{
// 							pathname: "/forbidden",
// 							state: {from: props.location}
// 						}}
// 					/>
// 				)
// 			}
// 		/>
// 	)
// };

class AppRouter extends PureComponent {
  render() {
    return (
      <Router>
        <div className={`hotel-app ${this.props.system.theme}`}>
          <Navigation />
          <Switch>
            <Route path="/" exact component={HotelsView} />
            <Route path={'/hotel/:id'} component={SingleHotelView} />
            <Route path="/reservation" component={ReservationsView} />
            <Route path="/buy" component={BuyHotelsView} />

            {/* #TODO commented for development time */}
            {/* <PrivateRoute path="/add" component={AddHotelsView} isAuth={this.props.currentUserAuth} /> */}
            <Route path="/add" component={AddHotelsView} />
            <Route path="/send" component={AddHotelReview} />
            <Route path="/profile" component={ProfileView} />
            <Route path="/forbidden" component={Forbidden} />
            <Route path="/add/success" component={AddHotelSuccess} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    system: state.system,
  };
};

export default connect(
  mapStateToProps,
  null,
)(AppRouter);
