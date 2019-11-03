import React from 'react';

import { Props } from './types';

const HotelPrice = (props: Props) => (
  <p className="hotel__price">
    <span>Price: </span>
    <span>&#36;</span>
    {props.price}
  </p>
);

export default HotelPrice;
