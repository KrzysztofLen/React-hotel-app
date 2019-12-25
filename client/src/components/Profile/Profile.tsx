import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import user from './../../assets/SVG/user.svg';

import { Props } from './types';

const Profile = (props: Props) => {
  const userName = props.currentUserAuth
    ? props.currentUserAuth.name
    : 'stranger';

  return (
    <div className={'login'}>
      <span className={'login__profile'}>{`Hello ${userName} !`}</span>
      <div className="login__container">
        <Link to={'/profile'}>
          <img
            className={'login__avatar'}
            src={
              props.currentUserAuth
                ? props.currentUserAuth.photos[0].value
                : user
            }
            alt={'profile'}
          />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentUserAuth: state.currentUserAuth,
  };
};

export default connect(mapStateToProps)(Profile);
