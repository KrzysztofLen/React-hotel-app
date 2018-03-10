import React, {Component} from 'react';
import app_data from '../app_data';
import Hotel from './Hotel';

class HotelsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent: false,
			perpage: 3,
			page: 1
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => {
			return {
				perpage: prevState.perpage + 1
			}
		});
	}

	render() {
		const count = this.state.page * this.state.perpage;
		const elem = app_data.slice(0, count);

		return (
			<main className="hotel-list">
				<div className="content__container">
					<div className="column">
						<div id="question-root">
							{elem.map((data) => <Hotel data={data} key={data.id}/>)}
						</div>
						<div className="more-container">
							<button className="btn-more" onClick={this.handleClick}>load more questions</button>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default HotelsList;