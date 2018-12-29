// @flow
import * as React from 'react';
import {List} from "../SVG/List";
import {Full} from "../SVG/Full";
import {connect} from "react-redux";
import {switchView} from "../../Redux/actions";

type Props = {
	switchView: Function,
	viewTypeId: number
}

class ViewSwitcher extends React.Component<Props> {
	setActive = (id: number) => {
		this.props.switchView(id);
	};

	render() {
		return (
			<React.Fragment>
				<div className="viewSwitcher">
					<div className="viewSwitcher__views">
						<div
							className={this.props.viewTypeId === 1 ? "viewSwitcher__filter viewSwitcher__filter--active" : "viewSwitcher__filter"}
							onClick={() => this.setActive(1)}><Full width="20" height="20"/></div>
						<div
							className={this.props.viewTypeId === 2 ? "viewSwitcher__filter viewSwitcher__filter--active" : "viewSwitcher__filter"}
							onClick={() => this.setActive(2)}><List width="20" height="20"/></div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

interface IViewType {
	viewTypeId: number
}

function mapStateToProps({viewTypeId}): IViewType {
	return {
		viewTypeId,
	}
}

const mapDispatchToProps = {switchView};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSwitcher);