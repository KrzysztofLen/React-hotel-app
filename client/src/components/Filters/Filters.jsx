import React, {Component} from 'react';
import {List} from "../SVG/List";
import {Full} from "../SVG/Full";


class Filters extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeId: 1
		};

		this.setActive = this.setActive.bind(this);
	}

	setActive(id) {
		this.setState({activeId: id})
	}

	render() {
		return (
			<div className="filters">
				<div className="filters__views">
					<div
						className={this.state.activeId === 1 ? "filters__filter filters__filter--active" : "filters__filter"}
						onClick={() => this.setActive(1)}><Full width="20" height="20"/></div>
					<div
						className={this.state.activeId === 2 ? "filters__filter filters__filter--active" : "filters__filter"}
						onClick={() => this.setActive(2)}><List width="20" height="20"/></div>
				</div>
			</div>
		)
	}
}

export default Filters;