import React, { PureComponent } from 'react';

import { State, Props } from './types';

class ToggleSwitch extends PureComponent<Props, State> {
  state: State = {
    enabled: true,
  };

  private toggle = (e: any) => {
    this.setState({ enabled: !this.state.enabled });
    this.props.onClick(this.state.enabled, e.target.id);
  };

  render() {
    const switchClasses = `switch switch--${this.props.theme} ${this.props.className}`;

    const className = `switch-toggle switch-toggle--${
      this.state.enabled === false ? 'on' : 'off'
    }`;

    return (
      <React.Fragment>
        <label htmlFor="">{this.props.label}</label>
        <div className={switchClasses} onClick={this.toggle}>
          <div className={className} id={this.props.id} />
        </div>
      </React.Fragment>
    );
  }
}

export default ToggleSwitch;
