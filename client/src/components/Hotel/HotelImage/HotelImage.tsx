import * as React from 'react';
import noImage from '../../../assets/image/No_Image_Available.jpg';
import { Props } from './types';

const HotelImage = (data: Props) => {
  return (
    <React.Fragment>
      <div className="overlay" onClick={data.onClick}>
        <span className="overlay__text">Click</span>
      </div>
      <img
        className="hotel__image"
        src={data.image == null ? noImage : data.image[0]}
        alt="zyx"
      />
    </React.Fragment>
  );
};

export default HotelImage;
