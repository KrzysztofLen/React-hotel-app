import React, { useState, useEffect } from 'react';

import { Props } from './types';

const ToggleSwitch = (props: Props) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const storageObject = localStorage.getItem(props.localStorageKey);
    if (storageObject === props.localStorageValue) {
      setEnabled(true);
    }
  });

  const onToggle = (event: any) => {
    event.persist();

    setEnabled((prevEnabled) => !prevEnabled);
    props.onClick(!enabled, event.target.id);
  };

  return (
    <React.Fragment>
      <label htmlFor="">{props.label}</label>
      <div
        className={`switch switch--${props.theme} ${props.className}`}
        onClick={onToggle}>
        <div
          className={`switch-toggle switch-toggle--${enabled ? 'on' : 'off'}`}
          id={props.id}
        />
      </div>
    </React.Fragment>
  );
};

const MemoizedToggleSwitch = React.memo(ToggleSwitch);
export { MemoizedToggleSwitch as ToggleSwitch };
