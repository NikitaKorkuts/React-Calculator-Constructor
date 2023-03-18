import React from 'react';

import { Display } from '../Display/Display';
import { OperationButtons } from '../OperationButtons/OperationButtons';
import { EqualButton } from '../EqualButton/EqualButton';
import { NumericButtons } from '../NumericButtons/NumericButtons';
import { useAppSelector } from '../../hooks/useAppSelector';
import { CalculatorComponentsEnum } from '../../types/calculator.types';

import s from './calculatorComponents.module.scss';

export const CalculatorComponents = () => {
  const { newComponentsSequence } = useAppSelector((state) => state.app);

  const isDisplayReplaced = newComponentsSequence.indexOf(CalculatorComponentsEnum.Display) !== -1;
  const isOperationsButtonsReplaced = newComponentsSequence.indexOf(CalculatorComponentsEnum.OperationsButtons) !== -1;
  const isNumericButtonsReplaced = newComponentsSequence.indexOf(CalculatorComponentsEnum.NumericButtons) !== -1;
  const isEqualButtonReplaced = newComponentsSequence.indexOf(CalculatorComponentsEnum.EqualButton) !== -1;

  const dragStartHandler = (e) => {
    e.dataTransfer.setData(`${e.target.id}`, e.target.id);
  };

  return (
    <div className={s.calculator}>
      <div
        className={`${s.calculator__component} ${isDisplayReplaced && s.calculator__component_replaced}`}
        id={`${CalculatorComponentsEnum.Display}`}
        draggable={!isDisplayReplaced}
        onDragStart={(e) => dragStartHandler(e)}
      >
        <Display />
      </div>
      <div
        id={`${CalculatorComponentsEnum.OperationsButtons}`}
        className={`${s.calculator__component} ${isOperationsButtonsReplaced && s.calculator__component_replaced}`}
        draggable={!isOperationsButtonsReplaced}
        onDragStart={(e) => dragStartHandler(e)}
      >
        <OperationButtons />
      </div>
      <div
        id={`${CalculatorComponentsEnum.NumericButtons}`}
        className={`${s.calculator__component} ${isNumericButtonsReplaced && s.calculator__component_replaced}`}
        draggable={!isNumericButtonsReplaced}
        onDragStart={(e) => dragStartHandler(e)}
      >
        <NumericButtons />
      </div>
      <div
        id={`${CalculatorComponentsEnum.EqualButton}`}
        className={`${s.calculator__component} ${isEqualButtonReplaced && s.calculator__component_replaced}`}
        draggable={!isEqualButtonReplaced}
        onDragStart={(e) => dragStartHandler(e)}
      >
        <EqualButton />
      </div>
    </div>
  );
};
