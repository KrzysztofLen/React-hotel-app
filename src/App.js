import React, {Component} from 'react';
import app_data from './app_data';

// Components
import Header from './js/Header.jsx';
import Navigation from './js/Navigation'
import Question from './js/HotelList.jsx';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent: false,
			perpage: 3,
			page: 1
		};
		this._onButtonClick = this._onButtonClick.bind(this);
	}

	_onButtonClick() {
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
			<div className="container">
				<Header/>
				<div className="content">
				<Navigation/>
				<main className="hotel-list">
					<div className="content__container">
						<div className="column">
								<div id="question-root">
									{elem.map((data) => <Question data={data} key={data.id}/>)}
								</div>
							<div className="more-container">
								<button className="btn-more" onClick={this._onButtonClick}>load more questions</button>
							</div>
						</div>
					</div>
				</main>
				</div>
			</div>
		);
	}
}


export default App;
