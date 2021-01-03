import * as React from 'react';
import { Props } from './types';

const HotelImage = (data: Props) => {
  return (
    <React.Fragment>
      <div className="overlay" onClick={data.onClick}>
        <span className="overlay__text">Click</span>
      </div>
      <img className="hotel__image" src={data.image} alt="zyx" />
    </React.Fragment>
  );
};

export default HotelImage;
