import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { OperationsEnum, CalculatorComponentsEnum, ModeEnum } from '../../types/enums';
import { useActions } from '../../hooks/useActions';

import s from './operationButtons.module.scss';

export const OperationButtons = () => {
  const { mode, isError } = useAppSelector((state) => state.app);
  const { setOperation } = useActions();

  return (
    <div
      className={s.operationButtons}
      id={String(CalculatorComponentsEnum.OperationsButtons)}
    >
      <button
        type="button"
        onClick={() => setOperation(OperationsEnum.Divide)}
        disabled={isError}
        className={`
          ${s.operationButtons__btn} 
          ${(mode === ModeEnum.Constructor || isError) && s.operationButtons_noEffects}
        `}
      >
        /
      </button>
      <button
        type="button"
        disabled={isError}
        onClick={() => setOperation(OperationsEnum.Multiply)}
        className={`
          ${s.operationButtons__btn} 
          ${(mode === ModeEnum.Constructor || isError) && s.operationButtons_noEffects}
        `}
      >
        x
      </button>
      <button
        type="button"
        disabled={isError}
        onClick={() => setOperation(OperationsEnum.Subtract)}
        className={`
          ${s.operationButtons__btn} 
          ${(mode === ModeEnum.Constructor || isError) && s.operationButtons_noEffects}
        `}
      >
        -
      </button>
      <button
        type="button"
        disabled={isError}
        onClick={() => setOperation(OperationsEnum.Add)}
        className={`
          ${s.operationButtons__btn} 
          ${(mode === ModeEnum.Constructor || isError) && s.operationButtons_noEffects}
        `}
      >
        +
      </button>
    </div>
  );
};
