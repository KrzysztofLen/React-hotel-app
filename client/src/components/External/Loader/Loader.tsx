import React from 'react';
import { Props } from './types';

const Loader = (props: Props) => {
  return (
    <div className="cube-wrapper">
      <div className="cube-folding">
        <span className="leaf1" />
        <span className="leaf2" />
        <span className="leaf3" />
        <span className="leaf4" />
      </div>
      <span className="loading" data-name="Loading">
        {props.text}
      </span>
    </div>
  );
};

const MemoizedLoader = React.memo(Loader);
export { MemoizedLoader as Loader };
