import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { ModeEnum } from '../../types/modeSwitch.types';
import { CalculatorComponentsEnum } from '../../types/calculator.types';

import s from './operationButtons.module.scss';

export const OperationButtons = () => {
  const { mode } = useAppSelector((state) => state.app);

  return (
    <div
      className={s.operationButtons}
      id={String(CalculatorComponentsEnum.OperationsButtons)}
    >
      <button
        type="button"
        className={`${s.operationButtons__btn} ${mode === ModeEnum.Constructor && s.operationButtons_noEffects}`}
      >
        /
      </button>
      <button
        type="button"
        className={`${s.operationButtons__btn} ${mode === ModeEnum.Constructor && s.operationButtons_noEffects}`}
      >
        x
      </button>
      <button
        type="button"
        className={`${s.operationButtons__btn} ${mode === ModeEnum.Constructor && s.operationButtons_noEffects}`}
      >
        -
      </button>
      <button
        type="button"
        className={`${s.operationButtons__btn} ${mode === ModeEnum.Constructor && s.operationButtons_noEffects}`}
      >
        +
      </button>
    </div>
  );
};
