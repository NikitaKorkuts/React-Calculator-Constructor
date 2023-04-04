import React from 'react';

import './assets/styles/globals.scss';
import { CalculatorComponents } from './components/CalculatorComponents/CalculatorComponents';
import { DropArea } from './components/DropArea/DropArea';
import { ModeSwitch } from './components/ModeSwitch/ModeSwitch';
import { useAppSelector } from './hooks/useAppSelector';
import { ModeEnum } from './types/enums';
import { Calculator } from './components/Calculator/Calculator';

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
        <div className="calculator">
          <Calculator />
        </div>
      )}

    </main>
  );
};

export default App;
