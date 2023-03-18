import React from 'react';

import './assets/styles/globals.scss';
import { CalculatorComponents } from './components/CalculatorComponents/CalculatorComponents';
import { DropArea } from './components/DropArea/DropArea';
import { ModeSwitch } from './components/ModeSwitch/ModeSwitch';
import { useAppSelector } from './hooks/useAppSelector';
import { ModeEnum } from './types/modeSwitch.types';

const App: React.FC = () => {
  const { mode } = useAppSelector((state) => state.app);

  return (
    <main>
      <div className="modeController">
        <ModeSwitch />
      </div>
      {mode === ModeEnum.Constructor ? (
        <div className="calculator-constructor">
          <CalculatorComponents />
          <DropArea />
        </div>
      ) : (
        <div>
          Calculator
        </div>
      )}

    </main>
  );
};

export default App;
