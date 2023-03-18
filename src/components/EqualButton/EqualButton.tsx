import React from 'react';

import { CalculatorComponentsEnum } from '../../types/calculator.types';

import s from './equalButton.module.scss';

export const EqualButton = () => (
  <div id={String(CalculatorComponentsEnum.EqualButton)}>
    <button
      id={String(CalculatorComponentsEnum.EqualButton)}
      type="button"
      className={s.equalButton}
    >
      =
    </button>
  </div>
);
