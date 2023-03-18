import React from 'react';

import EyeIcon from '../../assets/icons/eyeIcon.svg';
import SelectorIcon from '../../assets/icons/selectorIcon.svg';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ModeEnum } from '../../types/modeSwitch.types';
import { useActions } from '../../hooks/useActions';

import s from './modeSwitch.module.scss';

export const ModeSwitch = () => {
  const { mode } = useAppSelector((state) => state.app);
  const { setMode } = useActions();

  return (
    <div className={s.modeSwitch}>
      <div className={`
          ${s.modeSwitch__overlay} 
          ${mode === ModeEnum.Runtime ? s.modeSwitch__overlay_runtime : s.modeSwitch__overlay_constructor}
        `}
      />
      <button
        onClick={() => setMode(ModeEnum.Runtime)}
        type="button"
        className={s.modeSwitch__mode}
      >
        <EyeIcon className={`
            ${mode === ModeEnum.Runtime && s.modeSwitch__icon_active} 
            ${s.modeSwitch__icon}
          `}
        />
        <p className={s.modeSwitch__text}>
          Runtime
        </p>
      </button>
      <button
        type="button"
        onClick={() => setMode(ModeEnum.Constructor)}
        className={s.modeSwitch__mode}
      >
        <SelectorIcon className={`
            ${mode === ModeEnum.Constructor && s.modeSwitch__icon_active} 
            ${s.modeSwitch__icon}
          `}
        />
        <p className={s.modeSwitch__text}>
          Constructor
        </p>
      </button>
    </div>
  );
};
