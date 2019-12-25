import { Component, useEffect } from 'react';
import React from 'react';
import Notification from '../../Notification/Notification';
import { Props } from './types';

const SliderItem = (props: Props) => {
  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 27) props.onCloseModal(e);

    if (e.keyCode === 37 && props.hasPrev) props.onPrev(e);

    if (e.keyCode === 39 && props.hasNext) props.onNext(e);
  };

  return (
    <React.Fragment>
      {props.imageSrc == null && (
        <div>
          <Notification type={'warning'} text={'Sorry no image provided'} />
        </div>
      )}

      {props.imageSrc != null && (
        <div className={'gallery-modal__wrapper'}>
          {props.hasPrev && (
            <a href="#" className="modal-prev" onClick={props.onPrev}>
              &lsaquo;
            </a>
          )}
          {props.hasNext && (
            <a href="#" className="modal-next" onClick={props.onNext}>
              &rsaquo;
            </a>
          )}
          <img src={props.imageSrc} className={'gallery-modal__image'} />
        </div>
      )}
    </React.Fragment>
  );
};

export default SliderItem;
