import React, {Component} from 'react';
import LoginSystem from "../Auth/AuthSystem/AuthSystem";

class Forbidden extends Component {
	render() {
		return (
			<div className="container">
				<div className="forbidden__container">
					<p className="forbidden__text">You must log in to view the page!</p>
					<LoginSystem/>
				</div>
			</div>
		);
	}
}

export default Forbidden;