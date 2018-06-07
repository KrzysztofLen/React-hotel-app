import React from 'react';
import LoginSystem from './LoginSystem/LoginSystem';
import {Logo} from './Logo/Logo';
import {HotelsFilterContainer} from "./Search/Search";
import {getFilteredHotels} from "../selectors/getFilteredHotels";
import {connect} from "react-redux";

export class Header extends React.Component {

	render() {
		return (
			<header className="header">
				<Logo/>
				{/*<Search/>*/}
				<HotelsFilterContainer/>
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
