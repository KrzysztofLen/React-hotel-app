import React, {Component} from 'react';
import AddHotelForm from "../../components/AddHotel/AddHotelForm";
import {reduxForm} from 'redux-form';
import AddHotelReview from "../../components/AddHotel/AddHotelReview";


class AddHotelsView extends Component {
	state = {
		showFormReview:  false
	};

	render() {
		return (
			<React.Fragment>
				{this.state.showFormReview === true ? <AddHotelReview onCancel={() => this.setState({showFormReview: false})}/> :
					<AddHotelForm onSurveySubmit={() => this.setState({showFormReview: true})}/>
				}
			</React.Fragment>
		)
	}
}

export default reduxForm({
	form: 'addHotelForm',
	destroyOnUnmount: false // prevent cleaning form
})(AddHotelsView);