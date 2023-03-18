import React from 'react';

import DropIcon from '../../assets/icons/dropIcon.svg';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import CalculatorConstructor from '../CalculatorConstructor/CalculatorConstructor';

import s from './dropArea.module.scss';

export const DropArea = () => {
  const { newComponentsSequence } = useAppSelector((state) => state.app);
  const { setNewComponentsSequence } = useActions();

  const dropHandler = (e) => {
    e.target.classList.remove(s.hover);
    let id = e.dataTransfer.types[0];
    if (id) {
      id = Number(id);
      setNewComponentsSequence([id]);
    }
  };

  const dragEnterHandler = (e) => {
    e.target.classList.add(s.hover);
  };

  const dragLeaveHandler = (e) => {
    e.target.classList.remove(s.hover);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={s.dropArea}
    >
      {newComponentsSequence.length === 0 ? (
        <div
          className={s.dropArea__inner}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDrop={(e) => dropHandler(e)}
          onDragEnter={(e) => dragEnterHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
        >
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
      ) : (
        <CalculatorConstructor />
      )}
    </div>
  );
};
