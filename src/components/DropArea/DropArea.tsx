import React from 'react';

import DropIcon from '../../assets/icons/dropIcon.svg';

import s from './dropArea.module.scss';

export const DropArea = () => (
  <div className={s.dropArea}>
    <div className={s.dropArea__info}>
      <DropIcon />
      <p className={s.dropArea__info_mainText}>
        Перетащите сюда
      </p>
      <p className={s.dropArea__info_secondaryText}>
        любой элемент
      </p>
      <p className={s.dropArea__info_secondaryText}>
        из левой панели
      </p>
    </div>
  </div>
);
