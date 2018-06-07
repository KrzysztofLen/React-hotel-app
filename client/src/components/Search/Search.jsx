// @flow
import React, {Component} from 'react';
import { connect } from "react-redux";

import { searchHotels } from "../../actions";

type Props = {
	searchHotels: Function,
	hotelsSearch: string
};

class Search extends Component<Props> {
	componentDidMount() {
		console.log('%c Search component ', 'background: #222 color: #bada55', this.props);
	}
	handleSearchChange = (e) => {
		this.props.searchHotels(e.currentTarget.value);
	};

	render() {
		return (
			<form action="#" className="search">
				<input type="text"
				       className="search__input"
				       placeholder="Search hotels"
				       value={this.props.hotelsSearch}
				       onChange={this.handleSearchChange}
				/>
			</form>
		)
	}
}

const mapStateToProps = state => {
	return {
		hotelsSearch: state.hotelsSearch
	}
};

const mapDispatchToProps = {searchHotels};

export const HotelsFilterContainer = connect(mapStateToProps, mapDispatchToProps)(Search);