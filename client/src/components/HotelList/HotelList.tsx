import React, { useState, useEffect } from 'react';
import HotelListItem from '../HotelListItem/HotelListItem';
import Spinner from '../Spinner/Spinner';

import { Hotel } from '../../types';
import { Props } from './types';

const visibleHotelNumber: number = 6;
const superchargedVisibleHotel: number = 3;

const HotelsList = (props: Props) => {
  const [visibleHotel, setVisibleHotel] = useState<number>(visibleHotelNumber);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.onbeforeunload = () => window.scrollTo(0, 0); // force scroller to top on load
  });

  const onScroll = () => {
    const windowHeight: number = window.innerHeight + window.scrollY;

    if (document.body) {
      const bodyOffset: number = document.body.offsetHeight;

      if (windowHeight >= bodyOffset) {
        setVisibleHotel(
          (prevVisibleHotel) => prevVisibleHotel + superchargedVisibleHotel,
        );
      }
    }
  };

  const visibleHotels: Array<Hotel> = props.hotels.slice(0, visibleHotel);

  return (
    <main className="hotel-list">
      <div className="content__container">
        <div className={'hotel-list__container'}>
          {visibleHotels.map((hotel: Hotel, index: number) => (
            <HotelListItem
              data={hotel}
              key={hotel._id}
              id={hotel._id}
              index={index}
            />
          ))}
          <div className="hotel-list__more">
            {visibleHotels.length !== props.hotels.length && <Spinner />}
          </div>
        </div>
      </div>
    </main>
  );
};

const MemoizedHotelsList = React.memo(HotelsList);
export { MemoizedHotelsList as HotelsList };
