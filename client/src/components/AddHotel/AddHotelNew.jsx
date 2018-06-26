import React, {Component} from 'react';
import AddHotelForm from "./AddHotelForm";
import {reduxForm} from 'redux-form';
import AddHotelReview from "./AddHotelReview";


class AddHotelNew extends Component {
	state = {
		showFormReview:  false
	};

	render() {
		return (
			<React.Fragment>
				{this.state.showFormReview ? <AddHotelReview onCancel={() => this.setState({showFormReview: false})}/> :
					<AddHotelForm onSurveySubmit={() => this.setState({showFormReview: true})}/>
				}
			</React.Fragment>
		)
	}
}

export default reduxForm({
	form: 'addHotelForm',
	destroyOnUnmount: false // prevent cleaning form
})(AddHotelNew);