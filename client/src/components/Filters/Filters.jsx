import React, {Component} from 'react';
import {List} from "../SVG/List";
import {Full} from "../SVG/Full";

class Filters extends Component {
	render(){
		return (
			<div className="filters">
				<div className="filters__views">
					<div className="filters__list"><List width="20" height="20"/></div>
					<div className="filters__full"><Full width="20" height="20"/></div>
				</div>
			</div>
		)
	}
}

export default Filters;