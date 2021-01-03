import React from 'react';

import { Props } from './types';

const Box = (props: Props) => {
  const { index, value, title } = props;
  return (
    <div key={index} className={`box box--${index}`}>
      <div className={'box__content'}>
        <div className={`box__icon box__icon--${index}`} />
        <div className={'box__text'}>
          <span className={'box__text--primary'}>{value}</span>
          <span className={'box__text--secondary'}>{title}</span>
        </div>
      </div>
    </div>
  );
};

const MemoizedBox = React.memo(Box);
export { MemoizedBox as Box };
