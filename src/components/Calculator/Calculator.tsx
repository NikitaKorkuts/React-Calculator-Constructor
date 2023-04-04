import React from 'react';

import { Display } from '../Display/Display';
import { OperationButtons } from '../OperationButtons/OperationButtons';
import { NumericButtons } from '../NumericButtons/NumericButtons';
import { EqualButton } from '../EqualButton/EqualButton';
import { useAppSelector } from '../../hooks/useAppSelector';

import s from './calculator.module.scss';

export const Calculator = () => {
  const { componentsSequence } = useAppSelector((state) => state.app);
  const components = [
    <Display />,
    <OperationButtons />,
    <NumericButtons />,
    <EqualButton />,
  ];

  return (
    <div className={s.calculator}>
      {componentsSequence.map((id) => (
        <div
          key={id}
          className={s.calculator__component}
        >
          {components[id]}
        </div>
      ))}
    </div>
  );
};
