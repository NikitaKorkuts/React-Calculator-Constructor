import React from 'react';

import { CalculatorComponentsEnum } from '../../types/enums';
import { useActions } from '../../hooks/useActions';

import s from './equalButton.module.scss';

export const EqualButton = () => {
  const { evaluate } = useActions();

  return (
    <div id={String(CalculatorComponentsEnum.EqualButton)}>
      <button
        onClick={() => evaluate()}
        id={String(CalculatorComponentsEnum.EqualButton)}
        type="button"
        className={s.equalButton}
      >
        =
      </button>
    </div>
  );
};
