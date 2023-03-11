import React from 'react';

import { Display } from '../Display/Display';
import { OperationButtons } from '../OperationButtons/OperationButtons';
import { EqualButton } from '../EqualButton/EqualButton';
import { NumericButtons } from '../NumericButtons/NumericButtons';

import s from './calculator.module.scss';

export const Calculator = () => (
  <div className={s.calculator}>
    <div className={s.calculator__component}>
      <Display />
    </div>
    <div className={s.calculator__component}>
      <OperationButtons />
    </div>
    <div className={s.calculator__component}>
      <NumericButtons />
    </div>
    <div className={s.calculator__component}>
      <EqualButton />
    </div>
  </div>
);
