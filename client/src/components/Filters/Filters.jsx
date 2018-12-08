// @flow
import * as React from 'react';
import {List} from "../SVG/List";
import {Full} from "../SVG/Full";
import {connect} from "react-redux";
import {switchView} from "../../Redux/actions";

type Props = {
	switchView: Function,
	viewTypeId: number,
	hotelsNumberInDatabase: number
}

class Filters extends React.Component<Props> {
	setActive = (id: number) => {
		this.props.switchView(id);
	};

	render() {
		return (
			<div className="filters">
				<div className="filters__views">
					<div
						className={this.props.viewTypeId === 1 ? "filters__filter filters__filter--active" : "filters__filter"}
						onClick={() => this.setActive(1)}><Full width="20" height="20"/></div>
					<div
						className={this.props.viewTypeId === 2 ? "filters__filter filters__filter--active" : "filters__filter"}
						onClick={() => this.setActive(2)}><List width="20" height="20"/></div>
				</div>
				<div className="filters__counter">
					<span className="filters__counter-text">We've got : <span
						className="filters__counter-number">{this.props.hotelsNumberInDatabase}</span> hotel's in our database</span>
				</div>
			</div>
		)
	}
}

interface viewTypeAndHotelLength {
	viewTypeId: number,
	hotelsNumberInDatabase: number
}

function mapStateToProps({viewTypeId, hotelsNumberInDatabase}): viewTypeAndHotelLength {
	return {
		viewTypeId,
		hotelsNumberInDatabase: hotelsNumberInDatabase.count
	}
}

const mapDispatchToProps = {switchView};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);