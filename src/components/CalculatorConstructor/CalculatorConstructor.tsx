import React, { useState } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { Display } from '../Display/Display';
import { OperationButtons } from '../OperationButtons/OperationButtons';
import { NumericButtons } from '../NumericButtons/NumericButtons';
import { EqualButton } from '../EqualButton/EqualButton';
import { CalculatorComponentsEnum } from '../../types/calculator.types';
import { useActions } from '../../hooks/useActions';

import s from './calculatorConstructor.module.scss';

const CalculatorConstructor = () => {
  // current draggable component ID
  const [draggedComponentID, setDraggedComponentID] = useState<number | null>(null);
  // current droppable component ID
  const [dropComponentID, setDropComponentID] = useState<number | null>(null);

  const { newComponentsSequence } = useAppSelector((state) => state.app);
  const { setNewComponentsSequence } = useActions();

  const components = [
    <Display />,
    <OperationButtons />,
    <NumericButtons />,
    <EqualButton />,
  ];

  const dropHandler = () => {
    const componentsSequence = [...newComponentsSequence];
    if (draggedComponentID !== dropComponentID) {
      // removing a draggable component ID from an componentsSequence array if there is already one
      if (componentsSequence.indexOf(draggedComponentID) !== -1) {
        componentsSequence.splice(componentsSequence.indexOf(draggedComponentID), 1);
      }
      // if draggable component is Display, insert it only in the beginning of componentsSequence array
      if (draggedComponentID === CalculatorComponentsEnum.Display) {
        componentsSequence.unshift(draggedComponentID);
      } else if (dropComponentID === components.length) {
        // components.length is unfilled area ID, that is displayed after all components
        componentsSequence.push(draggedComponentID);
      } else {
        // insert draggable component ID before droppable component ID in componentsSequence array
        componentsSequence.splice(componentsSequence.indexOf(dropComponentID), 0, draggedComponentID);
      }
    }

    setNewComponentsSequence(componentsSequence);
    setDraggedComponentID(null);
    setDropComponentID(null);
  };

  const dragEnterHandler = (e) => {
    const id = e.dataTransfer.types[0];
    if (id) {
      setDraggedComponentID(Number(id));
    }
    setDropComponentID(Number(e.target.id));
  };

  const dragLeaveHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDropComponentID(null);
    }
  };
  const dragEndHandler = () => {
    setDraggedComponentID(null);
  };
  const dragStartHandler = (e) => {
    e.dataTransfer.setData(`${e.target.id}`, e.target.id);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={s.components}
      onDragLeave={(e) => dragLeaveHandler(e)}
    >
      {draggedComponentID === CalculatorComponentsEnum.Display && (
        <div className={s.components__line} />
      )}
      {newComponentsSequence.map((id) => {
        if (id === CalculatorComponentsEnum.Display) {
          return (
            <div
              key={id}
              className={`${s.components__component_display} ${s.components__component}`}
            >
              {components[CalculatorComponentsEnum.Display]}
            </div>
          );
        }
        return (
          <div key={id}>
            {draggedComponentID !== CalculatorComponentsEnum.Display && dropComponentID === id && (
              <div className={s.components__line} />
            )}
            <div
              id={String(id)}
              onDragOver={(e) => dragOverHandler(e)}
              onDragEnter={(e) => dragEnterHandler(e)}
              onDrop={() => dropHandler()}
              onDragStart={(e) => dragStartHandler(e)}
              onDragEnd={() => dragEndHandler()}
              draggable="true"
              className={`${s.components__component} ${id === draggedComponentID && s.components__component_dragged}`}
            >
              {components[id]}
            </div>
          </div>
        );
      })}
      <div
        className={s.components__unfilled}
        id={String(components.length)}
        onDragOver={(e) => dragOverHandler(e)}
        onDragEnter={(e) => dragEnterHandler(e)}
        onDrop={() => dropHandler()}
      >
        {draggedComponentID !== CalculatorComponentsEnum.Display && dropComponentID === components.length && (
          <div className={s.components__line} />
        )}
      </div>
    </div>
  );
};

export default CalculatorConstructor;
