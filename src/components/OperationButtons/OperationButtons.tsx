import React from 'react';

import s from './operationButtons.module.scss';

export const OperationButtons = () => (
  <div className={s.operationButtons}>
    <button
      type="button"
      className={s.operationButtons__btn}
    >
      /
    </button>
    <button
      type="button"
      className={s.operationButtons__btn}
    >
      x
    </button>
    <button
      type="button"
      className={s.operationButtons__btn}
    >
      -
    </button>
    <button
      type="button"
      className={s.operationButtons__btn}
    >
      +
    </button>
  </div>
);
