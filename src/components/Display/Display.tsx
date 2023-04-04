import React from 'react';

import { CalculatorComponentsEnum } from '../../types/enums';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getFontSize } from '../../utils/getFontSize';

import s from './display.module.scss';

export const Display = () => {
  const { currentOperand } = useAppSelector((state) => state.app);

  return (
    <div id={String(CalculatorComponentsEnum.Display)}>
      <div
        className={s.display}
        style={{ fontSize: getFontSize(37, currentOperand.length) }}
      >
        {currentOperand}
      </div>
    </div>
  );
};
