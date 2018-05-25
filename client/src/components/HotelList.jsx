import React, {Component} from 'react';
import app_data from '../app_data';
import Hotel from './Hotel';
import Loader from './Loader/Loader';

import {connect} from 'react-redux';
import * as actions from "../actions";

class HotelsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent: false,
			perpage: 6,
			page: 1,
			data: [],
			isLoading: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => {
			return {
				perpage: prevState.perpage + 3
			}
		});
	}

	componentDidMount() {
		this.setState({isLoading: true});

		//Temp to see Loading
		setTimeout(() => {

			fetch('/hotels', {
				method: 'GET'
			}).then(response => response.json())
				.then((data) => {
					this.setState({data: data.hotels, isLoading: false});
				}).catch(err => {
				if (err.status !== 200) {
					console.error('[Fetch Error :-S]', err);
				}
			});

		}, 5000);

	}

	render() {
		const count = this.state.page * this.state.perpage;
		const elem = this.state.data.slice(0, count);

		return (
			<main className="hotel-list">
				<div className="content__container">
					<div className="column">
						{this.state.isLoading ? <Loader text="Loading"/> :
							<React.Fragment>
								<div id="question-root">
									{elem.map((data, index) => <Hotel data={data} key={data.id} index={index}/>)}
								</div>
								<div className="more-container">
									<button className="btn-more" onClick={this.handleClick}>Load more Hotel's</button>
								</div>
							</React.Fragment>}
					</div>
				</div>
			</main>
		)
	}
}

function mapStateToProps({hotels}) {
	return {
		hotels
	}
}

export default connect(mapStateToProps)(HotelsList);