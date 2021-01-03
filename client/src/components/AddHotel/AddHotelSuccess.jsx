import React, { Component } from 'react';
import Notification from '../Notification/Notification.tsx';

class AddHotelSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
    };
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onModalOpen() {
    this.setState({ modalIsOpen: true });
  }

  onCloseModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.props.history.push('/');
  }

  render() {
    return (
      <Notification
        type={'success'}
        text={'The operation ended with success'}
      />
    );
  }
}

export default AddHotelSuccess;
