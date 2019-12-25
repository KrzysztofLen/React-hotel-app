import React, { Component } from 'react';

import { Props, State } from './types';

export const defaultProps = Object.freeze({
  autoClose: 5000,
  closeOnClick: true,
  type: 'default',
});

class Notification extends Component<Props, State> {
  private notificationInterval: any;
  static readonly defaultProps = defaultProps;

  state: State = {
    show: true,
    prefix: null,
    duration: 5000,
  };

  componentDidMount() {
    if (this.props.autoClose != null) {
      setTimeout(() => {
        this.setState({ show: false });
      }, this.props.autoClose);
    }

    this.notificationInterval = setInterval(() => {
      if (this.state.duration > 0) {
        this.setState(({ duration }) => ({
          duration: duration - 1000,
        }));
      }
    }, 1000);

    this.onSetNotificationPrefix();
  }

  componentWillUnmount() {
    clearInterval(this.notificationInterval);
  }

  private onDismiss = (): void => {
    this.setState({ show: false });
  };

  private onSetNotificationPrefix() {
    let prefix = '';

    switch (this.props.type) {
      case 'success':
        prefix = 'Well done!';
        break;
      case 'info':
        prefix = 'Heads up!';
        break;
      case 'warning':
        prefix = 'Warning!';
        break;
      case 'danger':
        prefix = 'Oh snap!';
        break;
      default:
        return false;
    }

    this.setState({ prefix });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.show && (
          <div
            className={`notification notification__${this.props.type}`}
            role="alert"
            onClick={this.onDismiss}>
            <div className={'notification__text'}>
              <strong>{this.state.prefix}</strong> {this.props.text}
            </div>
            <button
              type="button"
              className={'notification__close'}
              data-dismiss="alert"
              aria-label="Close"
              onClick={this.onDismiss}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Notification;
