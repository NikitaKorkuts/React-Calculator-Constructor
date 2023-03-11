import React from 'react';

import s from './display.module.scss';

export const Display = () => (
  <div>
    <input
      value="0"
      readOnly
      className={s.display}
      type="tel"
    />
  </div>
);
