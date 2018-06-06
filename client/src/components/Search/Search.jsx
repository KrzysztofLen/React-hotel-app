// @flow
import React, {Component} from 'react';
import { connect } from "react-redux";

import { searchHotels } from "../../actions";

class Search extends Component {
	handleSearchChange = (e) => {
		this.props.searchHotels(e.currentTarget.value);
	}

	render() {
		return (
			<form action="#" className="search">
				<input type="text"
				       className="search__input"
				       placeholder="Search hotels"
				       // value={this.props.searchHotels}
				       onChange={this.handleSearchChange}
				/>
			</form>
		)
	}
}

const mapStateToProps = state => {
	return {
		searchHotels: state.searchHotels
	}
};

const mapDispatchToProps = {searchHotels};

export default connect(mapStateToProps, mapDispatchToProps)(Search);