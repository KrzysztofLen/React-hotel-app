import React, {Component} from 'react';
import {connect} from "react-redux";

import {searchHotels} from "../../Redux/actions";

interface IProps {
	searchHotels: (value: string) => string,
	hotelsSearch: string
};

class Search extends Component<IProps, {}> {
	handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

const mapDispatchToProps = {searchHotels};

export default connect(null, mapDispatchToProps)(Search);