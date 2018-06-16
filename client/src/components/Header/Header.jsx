import React, {Component} from 'react';
import LoginSystem from '../LoginSystem/LoginSystem';
import {Logo} from '../Logo/Logo';
import {getFilteredHotels} from "../../selectors/getFilteredHotels";
import {connect} from "react-redux";
import Search from "../Search/Search";

export class Header extends Component {
	render() {
		return (
			<header className="header">
				<Logo/>
				<Search/>
				<LoginSystem/>
			</header>
		)
	}
}

const mapStateToProps = (state: Object) => {
	return {
		hotels: getFilteredHotels(state.hotels, state.hotelsSearch)
	};
};

export default connect(mapStateToProps, null)(Header);
