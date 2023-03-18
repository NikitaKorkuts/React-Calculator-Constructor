import React from 'react';

import { CalculatorComponentsEnum } from '../../types/calculator.types';

import s from './display.module.scss';

export const Display = () => (
  <div id={String(CalculatorComponentsEnum.Display)}>
    <input
      value="0"
      readOnly
      className={s.display}
      type="tel"
    />
  </div>
);
