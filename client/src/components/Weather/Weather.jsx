import React, {Component} from 'react';
import axios from 'axios';

const key = 'bff4e1badcf10cc889cb1eb07661ad0b';

class Weather extends Component {
	constructor(props) {
		super(props);

		this.state = {
			temperature: null,
			lat: null,
			lng: null
		}
	}

	async getAddress() {
		const adress = this.props.city + this.props.adress;
		console.log(adress);
		const encodedAddress = encodeURIComponent(adress);
		console.log(encodedAddress);
		const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBKRR27dCYhNAJk63Qr3Tpktp2J4-zBocc`;

		await axios.get(geocodeUrl).then(response => {
			if (response.data.status === 'ZERO_RESULTS') {
				console.log('Unable to find that address', response);
			}

			const lat = response.data.results[0].geometry.location.lat;
			const lng = response.data.results[0].geometry.location.lng;

			this.setState({
				lat,
				lng
			});
		}).then(res => {
			this.getWeather();
		}).catch(error => {
			if (error.code === 'ENOTFOUND') {
				console.log('Unable to connect to API');
			} else {
				console.log(error.message);
			}
		})
	}

	getWeather() {
		const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&appid=${key}`;
		axios.get(weatherUrl).then((response) => {
			console.log(response);
			this.setState({
				temperature: response.data.main.temp
			});
		}).catch(error => {
			console.log(error);
		});
	}

	componentDidMount() {
		this.getAddress();
	}

	render() {
		const temp = this.state.temperature;
		const celsius = Math.round(temp - 273.15);

		return (
			<div className="overview">
				<div id="celcius" className="weather-widget__temperature-celcius-container">
					<span>It's currently</span>
					<h2 className="weather-widget__temperature--celcius">{celsius}</h2><sup
					className="weather-widget__temperature--degrees">o</sup><a href="#"
					                                                           className="weather-widget__celcius">C</a>
				</div>
				<div className="icon sunny">
					<div className="sun">
						<div className="rays"/>
					</div>
				</div>
			</div>
		)
	}
}

export default Weather;