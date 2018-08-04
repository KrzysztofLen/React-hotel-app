import React, {Component} from 'react';
import {List} from "../SVG/List";
import {Full} from "../SVG/Full";
import {connect} from "react-redux";
import * as actions from '../../actions';
import {switchView} from "../../actions";
import {searchHotels} from "../../actions";


class Filters extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeId: 1,
			hotelsLength: 0
		};

		this.setActive = this.setActive.bind(this);
	}

	componentDidMount() {
		this._timer = setTimeout(() => {
			this.setState({hotelsLength: this.props.length});
		}, 1000);
	}

	componentWillUnmount() {
		clearTimeout(this._timer);
	}

	setActive(id) {
		this.setState({activeId: id});
		this.props.switchView(id);
	}

	render() {
		console.log(this.state);
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
				<div className="filters__counter">
					<span className="filters__counter-text">We've got : <span
						className="filters__counter-number">{this.state.hotelsLength}</span> hotel's in our database</span>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		viewSwitch: state.viewSwitch,
		length: state.length.count
	}
}

const mapDispatchToProps = {switchView};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);