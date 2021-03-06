import React, {Component} from "react";
import axios from "axios";
import {SunnyIcon} from "./SunnyIcon";
import {SunShowerIcon} from "./SunShowerIcon";
import {ThunderStormIcon} from "./ThunderStormIcon";
import {CloudyIcon} from "./CloudyIcon";
import {FlurriesIcon} from "./FlurriesIcon";
import {RainyIcon} from "./RainyIcon";

const weatherKey = "bff4e1badcf10cc889cb1eb07661ad0b";
const geocodeKey = "AIzaSyBKRR27dCYhNAJk63Qr3Tpktp2J4-zBocc";

class Weather extends Component {
	constructor(props) {
		super(props);

		this.state = {
			temperature: null,
			lat: null,
			lng: null
		};
	}

	async getAddress() {
		const adress = this.props.city + this.props.adress;
		const encodedAddress = encodeURIComponent(adress);
		const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${geocodeKey}`;

		const result = await axios
			.get(geocodeUrl)
			.then(response => {
				if (response.data.status === "ZERO_RESULTS") {
					console.log("Unable to find that address", response);
				}

				return {
					lat: response.data.results[0].geometry.location.lat,
					lng: response.data.results[0].geometry.location.lng
				};

			}).catch(error => {
				if (error.code === "ENOTFOUND") {
					console.log("Unable to connect to server");
				} else {
					console.log(error.message);
				}
			});

		this.getWeather(result);
	}

	async getWeather({lat, lng}) {
		const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherKey}`;
		await axios
			.get(weatherUrl)
			.then(response => {
				this.setState({
					temperature: response.data.main.temp,
					weather: response.data.weather[0].main
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.getAddress();
	}

	setWeather() {
		switch (this.state.weather) {
			case "Dizzle":
				return <SunShowerIcon/>;
			case "Thunderstom":
				return <ThunderStormIcon/>;
			case "Snow":
				return <FlurriesIcon/>;
			case "Clear":
				return <SunnyIcon/>;
			case "Rain":
				return <RainyIcon/>;
			case "Clouds":
				return <CloudyIcon/>;
			default:
				console.log('NO ICON');
		}
	}

	render() {
		const celsius = Math.round(this.state.temperature - 273.15);

		return (
			<div className="weather">
				<div id="celcius" className="weather__temperature">
					<span className="weather__currently">It's currently</span>
					<h2 className="weather__celcius">{celsius}</h2>
					<span className="weather__degrees"><sup>o</sup>C</span>
				</div>
				{this.setWeather()}
			</div>
		);
	}
}

export default Weather;
