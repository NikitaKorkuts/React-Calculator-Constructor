import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';

import { ModeEnum } from '../../types/modeSwitch.types';
import { CalculatorComponentsEnum } from '../../types/calculator.types';

import s from './numericButtons.module.scss';

export const NumericButtons = () => {
  const { mode } = useAppSelector((state) => state.app);

  return (
    <div
      className={s.numericButtons}
      id={String(CalculatorComponentsEnum.NumericButtons)}
    >
      <button
        type="button"
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        7
      </button>
      <button
        type="button"
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        8
      </button>
      <button
        type="button"
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        9
      </button>
      <button
        type="button"
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        4
      </button>
      <button
        type="button"
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        5
      </button>
      <button
        type="button"
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        6
      </button>
      <button
        type="button"
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        1
      </button>
      <button
        type="button"
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        2
      </button>
      <button
        type="button"
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        3
      </button>
      <button
        type="button"
        className={`${s.numericButtons__zeroBtn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        0
      </button>
      <button
        type="button"
        className={`${s.numericButtons__btn} ${mode === ModeEnum.Constructor && s.numericButtons_noEffects}`}
      >
        ,
      </button>
    </div>
  );
};
