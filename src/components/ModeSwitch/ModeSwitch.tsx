import React from 'react';

import EyeIcon from '../../assets/icons/eyeIcon.svg';
import SelectorIcon from '../../assets/icons/selectorIcon.svg';

import s from './modeSwitch.module.scss';

export const ModeSwitch = () => (
  <div className={s.modeSwitch}>
    <div className={`${s.modeSwitch__mode}`}>
      <EyeIcon className={s.modeSwitch__icon} />
      <p>Runtime</p>
    </div>
    <div className={`${s.modeSwitch__mode} ${s.modeSwitch__mode_active}`}>
      <SelectorIcon className={s.modeSwitch__icon} />
      <p>Constructor</p>
    </div>
  </div>
);
