import React from 'react';

// Components
import Header from './components/Header.jsx';
import HotelsList from './components/HotelList.jsx';

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div className="container">
// 				<Header/>
// 				<div className="content">
// 					<HotelsList/>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// App for test is API works btw. IT works!
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: false,
		};
	}

	componentDidMount() {
		this.setState({isLoading: true});

		// Temp to see Loading
		setInterval(() => {

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
		const {data, isLoading} = this.state;

		const divStyle = {
			color: 'white'
		};

		return <div>
			{isLoading && <p style={divStyle}>Loading ...</p>}
			{data.map((element, idx) => {
				return <div key={idx}>
					<p>{element.hotel_name}</p>
				</div>
			})}
		</div>;
	}
}


export default App;
