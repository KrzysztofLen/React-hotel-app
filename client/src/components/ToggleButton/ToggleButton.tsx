import React from 'react';
import { Props } from './types';

const ToggleButton = (props: Props) => {
  const onToggleButton = () => {
    props.onClick(props.index);
  };

  return (
    <button className={props.btnClass} onClick={onToggleButton}>
      {props.isOpen ? 'Less' : 'More info'}
    </button>
  );
};

const MemoizedToggleButton = React.memo(ToggleButton);
export { MemoizedToggleButton as ToggleButton };
