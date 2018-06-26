import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

// Components
import Rating from "../External/Rating/Rating";
import AddHotelField from "./AddHotelField";
import FIELDS from './formFields';
import AddHotelFile from "./AddHotelFile";

class AddHotelForm extends Component {
	renderFields() {
		return (
			<React.Fragment>
				{FIELDS.map(({label, name}, i) => {
					return (
						<Field key={i} label={label} type="text" name={name} component={AddHotelField}/>
					)
				})}
				{/*<Field label="hotel_image" type="file" name="rating" component={AddHotelFile} />*/}
			</React.Fragment>
		)
	}

	testSending(e) {
		e.preventDefault();

		const ob = {
			hotel_name: 'This is test from jsx',
			hotel_adress: 'This is test from jsx',
			hotel_city: 'This is test from jsx',
			hotel_province: 'This is test from jsx'
		};


		fetch('http://localhost:3000/hotels', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(ob)
		})
			.then(res => res.json())
			.then(res => {
				console.log('ADD NEW HOTEL');
				console.log(res);
			}).catch(error => console.log('ERROR: ', error));
	}

	render() {
		return (
			<React.Fragment>
				<div className="container form-style-6">
					<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{/*<form onSubmit={this.testSending}>*/}
						{this.renderFields()}
						<Link to="/" className="">Cancel</Link>
						<button type="submit" className="">Next</button>
					</form>
				</div>
			</React.Fragment>
		)
	}
}

export default reduxForm({
	form: 'addHotelForm'
})(AddHotelForm);