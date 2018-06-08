import React from 'react';
import LoginSystem from './LoginSystem/LoginSystem';
import {Logo} from './Logo/Logo';
import {getFilteredHotels} from "../selectors/getFilteredHotels";
import {connect} from "react-redux";
import Search from "./Search/Search";

export class Header extends React.Component {

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

const mapStateToProps = state => {
	return {
		hotels: getFilteredHotels(state.hotels, state.hotelsSearch)
	};
};

export default connect(mapStateToProps, null)(Header);
