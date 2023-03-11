import React from 'react';

import './assets/styles/globals.scss';
import { Calculator } from './components/Calculator/Calculator';
import { DropArea } from './components/DropArea/DropArea';
import { ModeSwitch } from './components/ModeSwitch/ModeSwitch';

const App: React.FC = () => (
  <main>
    <div className="modeController">
      <ModeSwitch />
    </div>
    <div className="calculator-constructor">
      <Calculator />
      <DropArea />
    </div>
  </main>
);

export default App;
