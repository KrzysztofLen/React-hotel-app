import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/index';
import { Link } from 'react-router-dom';
import user from './../../assets/SVG/user.svg';

import GoogleSignUp from '../../components/GoogleSignUp/GoogleSignUp';

import { Props } from './types';

class ProfileView extends PureComponent<Props, {}> {
  async componentDidMount() {
    await this.props.fetchUser();
  }

  render() {
    return (
      <div className={'profile'}>
        <div className={'content__header-wrapper'}>
          <h1 className={'view-header'}>Profile details</h1>
        </div>
        <div className={'profile__content'}>
          <div className={'profile__photos'}>
            <img
              className={'profile__photo'}
              src={
                this.props.currentUserAuth
                  ? this.props.currentUserAuth.photos[0].value
                  : user
              }
              alt={'profile'}
            />
          </div>
          <div className={'profile__name'}>
            <span className={'profile__label'}>Name & Surname:</span>
            {this.props.currentUserAuth ? (
              <span>{this.props.currentUserAuth.name}</span>
            ) : (
              <GoogleSignUp />
            )}
          </div>
          <div className={'profile__email'}>
            <span className={'profile__label'}>Email:</span>
            {this.props.currentUserAuth ? (
              <span>{this.props.currentUserAuth.emails[0].value}</span>
            ) : (
              <span>example@example.com</span>
            )}
          </div>
          <div className={'profile__buttons'}>
            <Link to={'/'} className="button is-primary">
              Back
            </Link>
            {this.props.currentUserAuth && (
              <a href={'/api/logout'} className="button is-danger">
                Logout
              </a>
            )}
          </div>
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

export default connect(mapStateToProps, actions)(ProfileView);
