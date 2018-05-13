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

	//TODO Use axios instead fetch
	componentDidMount() {
		this.setState({isLoading: true});

		// Temp to see Loading
		// setInterval(() => {

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

		// }, 5000);
	}

	render() {
		const table = {
			"background": "white",
			"border": "1px solid #ccc"
		}

		const {data, isLoading} = this.state;

		const divStyle = {
			color: 'white'
		};

		const imgStyle = {
			"width": "100px"
		};

		return <div>
			{isLoading && <p style={divStyle}>Loading ...</p>}
			{data.map((element, idx) => {
				return <div key={idx}>
					<table style={table}>
						<tbody>
						<tr>
							<th>Hotel name</th>
							<th>{element.hotel_name}</th>
						</tr>
						<tr>
							<th>Hotel adress</th>
							<th>{element.hotel_adress}</th>
							<th>{element.hotel_city}</th>
							<th>{element.hotel_province}</th>
							<th>{element.hotel_distance}</th>
						</tr>
						<tr>
							<th>Hotel description</th>
							<th>{element.hotel_description}</th>
						</tr>
						<tr>
							<th>Hotel stars</th>
							<th>{element.hotel_stars}</th>
						</tr>
						<tr>
							<th>Hotel rating</th>
							<th>{element.hotel_rating}</th>
						</tr>
						<tr>
							<th>Opinions</th>
							<th>{element.opinions}</th>
						</tr>
						<tr>
							<th>Is new</th>
							<th>{element.is_new ? <p>&#x2714;</p> : <p>&#x274c;</p>}</th>
						</tr>
						<tr>
							<th>Is apartment</th>
							<th>{element.is_apartment ? <p>&#x2714;</p> : <p>&#x274c;</p>}</th>
						</tr>
						<tr>
							<th>Facilities</th>
							<th>restaurant{element.facilities_restaurant ? <p>&#x2714;</p> : <p>&#x274c;</p>}</th>
							<th>gym{element.facilities_gym ? <p>&#x2714;</p> : <p>&#x274c;</p>}</th>
							<th>wifi{element.facilities_wifi ? <p>&#x2714;</p> : <p>&#x274c;</p>}</th>
							<th>card_payment{element.facilities_card_payment ? <p>&#x2714;</p> : <p>&#x274c;</p>}</th>
							<th>game_room{element.facilities_game_room ? <p>&#x2714;</p> : <p>&#x274c;</p>}</th>
						</tr>
						<tr>
							{element.hotel_images.map(elem => {
								return <th><img style={imgStyle} src={elem} /></th>
							})}
						</tr>
						</tbody>
					</table>
				</div>
			})}
		</div>;
	}
}


export default App;
