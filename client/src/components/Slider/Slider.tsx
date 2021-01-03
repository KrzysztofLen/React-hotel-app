import React, { useState } from 'react';
import SliderItem from './SliderItem/SliderItem';
import { Props } from './types';

const Slider = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const onCloseModal = (event: Event): void => {
    if (event != undefined) {
      event.preventDefault();
    }
  };

  const onPrev = (event: Event): void => {
    if (event != undefined) {
      event.preventDefault();
    }

    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const onNext = (event: Event): void => {
    if (event != undefined) {
      event.preventDefault();
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <SliderItem
      hasNext={currentIndex + 1 < props.images.length}
      hasPrev={currentIndex > 0}
      onNext={onNext}
      onPrev={onPrev}
      onCloseModal={onCloseModal}
      imageSrc={props.images[currentIndex]}
    />
  );
};

const MemoizedSlider = React.memo(Slider);
export { MemoizedSlider as Slider };
