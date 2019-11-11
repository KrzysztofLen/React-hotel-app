import * as React from 'react';
import { connect } from 'react-redux';
import { Cross } from '../../SVG/Cross';
import { Check } from '../../SVG/Check';
import ModalWindow from '../../ModalWindow/ModalWindow';
import Auth from '../Auth';
import Dropdown from '../../External/Dropdown/Dropdown.tsx';

// type Props = {
// 	currentUserAuth: Object,
// 	dispatch: Function
// }
//
// type State = {
// 	modalIsOpen: boolean
// }

class AuthSystem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
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

  renderContent() {
    switch (this.props.currentUserAuth) {
      case null:
      case false:
        return (
          <React.Fragment>
            <button className="button is-success" onClick={this.onModalOpen}>
              Login
              <Check width={20} height={20} />
            </button>
            <ModalWindow
              isOpen={this.state.modalIsOpen}
              closeModal={this.onCloseModal}
              component={<Auth />}
            />
          </React.Fragment>
        );
      default:
        return (
          <Dropdown>
            <a href="/api/logout" className="button is-danger">
              Logout
              <Cross width={20} height={20} />
            </a>
          </Dropdown>
        );
    }
  }

  render() {
    return (
      <div className="login__container">
        {this.props.currentUserAuth && (
          <span className="login__profile">
            <span>Hello</span>
            <span className="login__profile--name">
              {this.props.currentUserAuth.name}
            </span>
            <span>!</span>
          </span>
        )}
        {this.renderContent()}
      </div>
    );
  }
}

// interface AuthInterface {
// 	currentUserAuth: Object,
// 	googleId: string,
// 	name: string,
// 	credits: number
// }

function mapStateToProps({ currentUserAuth }) {
  return {
    currentUserAuth,
  };
}

export default connect(mapStateToProps)(AuthSystem);
