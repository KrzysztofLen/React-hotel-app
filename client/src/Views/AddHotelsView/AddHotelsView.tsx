import React, { Component } from 'react';
import AddHotelForm from '../../components/AddHotel/AddHotelForm';
import AddHotelReview from '../../components/AddHotel/AddHotelReview';

import { State } from './types';

class AddHotelsView extends Component<{}, State> {
  state: State = {
    showFormReview: false,
  };

  private onCancelForm = () => {
    this.setState({ showFormReview: false });
  };

  private onSubmitForm = () => {
    this.setState({ showFormReview: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.showFormReview ? (
          <AddHotelReview onCancel={this.onCancelForm} />
        ) : (
          <AddHotelForm onSurveySubmit={this.onSubmitForm} />
        )}
      </React.Fragment>
    );
  }
}

export default AddHotelsView;
