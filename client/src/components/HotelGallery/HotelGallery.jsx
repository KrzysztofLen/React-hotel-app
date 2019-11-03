import React from 'react';

const HotelGallery = (props) => {
  return (
    <div className="gallery__container">
      {props.images.map((element, idx) => (
        <figure key={idx} className="gallery__item">
          <img
            src={'/' + element}
            alt={'Photo of hotel ' + idx}
            className="gallery__photo"
          />
        </figure>
      ))}
    </div>
  );
};

export default HotelGallery;
