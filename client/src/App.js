import React from 'react';

// Components
import Header from './components/Header.jsx';
import HotelsList from './components/HotelList.jsx';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header/>
				<div className="content">
					<HotelsList/>
				</div>
			</div>
		);
	}
}

// App for test is API works btw. IT works!
// class App extends React.Component {
// 	state = {
// 		response: ''
// 	};
//
// 	componentDidMount() {
// 		fetch('/products', {
// 			method: 'GET'
// 		}).then(response => {
// 			return response.ok ? response.json() : Promise.reject(response);
// 		}).then(data => {
// 			console.log(data);
// 		}).catch(err => {
// 			if (err.status !== 200) {
// 				console.error('[Fetch Error :-S]', err);
// 			}
// 		});
// 	}
//
// 	callApi = async () => {
// 		const response = await fetch('/products');
// 		const body = await response.json();
//
// 		if (response.status !== 200) {
// 			throw Error(body.message);
// 		}
//
// 		return body;
// 	}
//
// 	render() {
// 		return (
// 			<p className="App-intro">{this.state.response}</p>
// 		);
// 	}
// }


export default App;
