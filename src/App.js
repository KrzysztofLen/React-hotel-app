import React, {Component} from 'react';
import app_data from './app_data';

// Components
import Header from './js/header.jsx';
import Question from './js/QuestionBox.jsx';


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
					<div className="content__container">
						<div className="column column-offset-20 col-80">
								<div id="question-root">
									{elem.map((data) => <Question data={data} key={data.id}/>)}
								</div>
							<div className="more-container">
								<button className="btn-more" onClick={this._onButtonClick}>load more questions</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default App;
