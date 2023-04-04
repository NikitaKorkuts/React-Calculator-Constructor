import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';

import { ModeEnum, CalculatorComponentsEnum } from '../../types/enums';
import { useActions } from '../../hooks/useActions';

import s from './numericButtons.module.scss';

export const NumericButtons = () => {
  const { mode } = useAppSelector((state) => state.app);
  const { addDigit } = useActions();

  return (
    <div
      className={s.numericButtons}
      id={String(CalculatorComponentsEnum.NumericButtons)}
    >
      <button
        type="button"
        onClick={() => addDigit('7')}
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        7
      </button>
      <button
        type="button"
        onClick={() => addDigit('8')}
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        8
      </button>
      <button
        type="button"
        onClick={() => addDigit('9')}
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        9
      </button>
      <button
        type="button"
        onClick={() => addDigit('4')}
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        4
      </button>
      <button
        type="button"
        onClick={() => addDigit('5')}
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        5
      </button>
      <button
        type="button"
        onClick={() => addDigit('6')}
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        6
      </button>
      <button
        type="button"
        onClick={() => addDigit('1')}
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        1
      </button>
      <button
        type="button"
        onClick={() => addDigit('2')}
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        2
      </button>
      <button
        type="button"
        onClick={() => addDigit('3')}
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        3
      </button>
      <button
        type="button"
        onClick={() => addDigit('0')}
        className={`${s.numericButtons__zeroBtn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        0
      </button>
      <button
        type="button"
        onClick={() => addDigit(',')}
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        ,
      </button>
    </div>
  );
};
