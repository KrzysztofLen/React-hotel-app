import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import * as actions from "./../../Redux/actions";

// Components
import {TEXT_FIELDS, NUMBER_FIELDS, BOOLEAN_FIELDS} from './formFields';
import ToggleSwitch from "../External/ToggleSwitch/ToggleSwitch";
import DropzoneElement from "../External/Dropzone/DropzoneElement";

type IState = {
	hotel_name: string,
	hotel_adress: string,
	hotel_city: string,
	hotel_province: string,
	hotel_price: number,
	hotel_distance: number,
	hotel_description: string,
	hotel_description: "",
	hotel_stars: number,
	hotel_rating: number,
	hotel_reviews: number,
	is_new: boolean,
	is_apartment: boolean,
	facilities_restaurant: boolean,
	facilities_gym: boolean,
	facilities_wifi: boolean,
	facilities_card_payment: boolean,
	facilities_game_room: boolean
}

class AddHotelForm extends Component<IState> {
	constructor(props) {
		super(props);

		this.state = {
			is_new: false,
			is_apartment: false,
			facilities_restaurant: false,
			facilities_gym: false,
			facilities_wifi: false,
			facilities_card_payment: false,
			facilities_game_room: false,
			hotel_images: [],
			files: []
		}
	}

	renderTextFields = () => {
		return (
			<div className="hotel-form__formValueBox">
				{TEXT_FIELDS.map(({label, name}, i) => {
					return (
						<div key={i}>
							<label htmlFor="">{label}</label>
							<input type="text" className={"input"}/>
						</div>
					)
				})}
			</div>
		)
	}

	renderNumberFields = () => {
		return (
			<div className="hotel-form__formValueBox">
				{NUMBER_FIELDS.map(({label, name}, i) => {
					return (
						<div key={i}>
							<label htmlFor="">{label}</label>
							<input type="number" className={"input"}/>
						</div>
					)
				})}
			</div>
		)
	}

	renderBooleanFields = () => {
		return (
			<div className="hotel-form__formValueBox">
				{BOOLEAN_FIELDS.map(({label, name}, i) => {
					return (
						<div className={"hotel-form__toggleInput"} key={i}>
							<ToggleSwitch onClick={this.setToggleValues} theme={"default"}
							              className={"d-flex"} label={label} id={name}/>
						</div>
					)
				})}
			</div>
		)
	}

	//TODO refactor this
	handleSubmit = (e) => {
		e.preventDefault();

		const values = {
			// hotel_name: e.target[0].value,
			// hotel_adress: e.target[1].value,
			// hotel_city: e.target[2].value,
			// hotel_province: e.target[3].value,
			// hotel_price: e.target[5].value,
			// hotel_distance: e.target[6].value,
			// hotel_description: e.target[4].value,
			// hotel_stars: e.target[7].value,
			// hotel_rating: e.target[8].value,
			// hotel_reviews: e.target[9].value,
			hotel_name: "Test",
			hotel_adress: "Test",
			hotel_city: "Test",
			hotel_province: "Test",
			hotel_price: 0,
			hotel_distance: 0,
			hotel_description: "Test",
			hotel_stars: 0,
			hotel_rating: 0,
			hotel_reviews: 0,
			is_new: this.state.is_new,
			is_apartment: this.state.is_apartment,
			facilities_restaurant: this.state.facilities_restaurant,
			facilities_gym: this.state.facilities_gym,
			facilities_wifi: this.state.facilities_wifi,
			facilities_card_payment: this.state.facilities_card_payment,
			facilities_game_room: this.state.facilities_game_room,
			hotel_images: [{
				fieldname: 'hotel_images',
				originalname: 'burjkalifa1_optimized.jpg',
				encoding: '7bit',
				mimetype: 'image/jpeg',
				destination: './uploads/',
				filename: '2019-02-17T10-30-43.042Zburjkalifa1_optimized.jpg',
				path: 'uploads/2019-02-17T10-30-43.042Zburjkalifa1_optimized.jpg',
				size: 353741
			}]
		};
		this.props.submitSurvey(values, this.props.history)
		this.props.addHotel(values);
		this.props.history.push('/send');
	}

	setToggleValues = (value, id) => {
		this.setState({
			[id]: value
		})
	}

	onDrop = (files) => {
		this.setState({files});
		this.encodeImageFileAsURL(files)
	}

	encodeImageFileAsURL = (elements) => {
		//#TODO try not send base64 because of optimalization
		const fileList = [];
		this.setState({
			hotel_images: elements
		});
		// for(let i = 0; i < elements.length; i++) {
		// 	const reader = new FileReader();
		//
		// 	reader.onloadend = () => {
		// 		fileList.push(reader.result);
		//
		// 		this.setState({
		// 			hotel_images: fileList
		// 		});
		// 	}
		//
		// 	reader.readAsDataURL(elements[i]);
		// }
	}

	render() {

		return (
			<div className={"hotel-form"}>
				<div className="hotel-form__container">
					<h5 className="hotel-form__header">Fill to submit</h5>
					<form onSubmit={this.handleSubmit} className="hotel-form__form"
					      encType="multipart/form-data"
					      method="post" id={"test-form"}>
						<div className="hotel-form__formValuesBox">
							{this.renderTextFields()}
							{this.renderNumberFields()}
							{this.renderBooleanFields()}
						</div>
						<DropzoneElement onDrop={this.onDrop} files={this.state.files}/>
						<div className="hotel-form__buttons">
							<Link to="/" className="button is-danger">Cancel</Link>
							{/*<button type="submit" className="button is-info">Next</button>*/}
							<button type="submit" className="button is-link">Send</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

//TODO create validation for fields
function validate(values) {
	const errors = {};

	TEXT_FIELDS.forEach(({name}) => {
		if (!values[name]) {
			errors[name] = 'FAILURE! You must provide a value';
		}
	});

	NUMBER_FIELDS.forEach(({name}) => {
		if (!values[name]) {
			errors[name] = 'FAILURE! You must provide a value';
		}
	});

	BOOLEAN_FIELDS.forEach(({name}) => {
		if (!values[name]) {
			errors[name] = 'FAILURE! You must select a value';
		}
	});

	return errors;
}

function mapStateToProps(state) {
	return {
		addHotelFormValues: state.addHotelFormValues
	}
}

export default connect(mapStateToProps, actions)(withRouter(AddHotelForm));