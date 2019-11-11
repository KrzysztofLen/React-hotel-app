import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import user from './../../assets/SVG/user.svg';

import { Props } from './types';

class Profile extends PureComponent<Props, {}> {
  render() {
    return (
      <div className={'login'}>
        <span className={'login__profile'}>{`Hello ${
          this.props.currentUserAuth
            ? this.props.currentUserAuth.name
            : 'stranger'
        } !`}</span>
        <div className="login__container">
          <Link to={'/profile'}>
            <img
              className={'login__avatar'}
              src={
                this.props.currentUserAuth
                  ? this.props.currentUserAuth.photos[0].value
                  : user
              }
              alt={'profile'}
            />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    currentUserAuth: state.currentUserAuth,
  };
};

export default connect(mapStateToProps)(Profile);
