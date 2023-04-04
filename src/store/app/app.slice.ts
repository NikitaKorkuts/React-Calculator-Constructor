import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OperationsEnum, ModeEnum } from '../../types/enums';
import { validateOperand } from '../../utils/validateOperand';

export type AppInitialStateType = {
  mode: ModeEnum
  componentsSequence: number[]
  newComponentsSequence: number[]
  currentOperand: string
  previousOperand: number
  previousOperandAdditional: number,
  operation: OperationsEnum
  formResetFlag: boolean
  isError: boolean
};

const initialState: AppInitialStateType = {
  mode: ModeEnum.Constructor,
  componentsSequence: [0, 1, 2, 3], // sequence of calculator components IDs in order of rendering from top to bottom
  newComponentsSequence: [], // sequence of calculator components IDs, which are assigned during calculator construction
  currentOperand: '0',
  previousOperand: 0,
  previousOperandAdditional: 0,
  operation: OperationsEnum.None,
  formResetFlag: false,
  isError: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<ModeEnum>) {
      if (action.payload === ModeEnum.Runtime) {
        if (state.newComponentsSequence.length === 4) state.componentsSequence = state.newComponentsSequence;
        state.newComponentsSequence = [];
      }
      appSlice.caseReducers.clear(state);
      state.mode = action.payload;
    },
    setNewComponentsSequence(state, action: PayloadAction<number[]>) {
      state.newComponentsSequence = action.payload;
    },
    addDigit(state, action: PayloadAction<string>) {
      if (state.currentOperand.length >= 16 && !state.formResetFlag) {
        // do nothing
      } else if (state.currentOperand === '0' && action.payload !== ',' && !state.formResetFlag) {
        state.currentOperand = action.payload;
      } else if (state.formResetFlag && action.payload === ',') {
        state.currentOperand = '0,';
        state.formResetFlag = false;
        state.isError = false;
      } else if (state.formResetFlag) {
        state.currentOperand = action.payload;
        state.formResetFlag = false;
        state.isError = false;
      } else if (action.payload === ',' && state.currentOperand.includes(',')) {
        // do nothing
      } else {
        state.currentOperand += action.payload;
      }
    },
    clear(state) {
      state.currentOperand = '0';
      state.previousOperand = 0;
      state.previousOperandAdditional = 0;
      state.operation = OperationsEnum.None;
      state.formResetFlag = false;
      state.isError = false;
    },
    setOperation(state, action: PayloadAction<OperationsEnum>) {
      if (!state.isError) {
        if (state.previousOperand !== 0 && !state.formResetFlag) {
          appSlice.caseReducers.evaluate(state);
          if (state.isError) {
            state.operation = OperationsEnum.None;
          } else {
            state.operation = action.payload;
            state.previousOperand = Number(state.currentOperand.replace(',', '.'));
          }
        } else {
          state.operation = action.payload;
          state.previousOperand = Number(state.currentOperand.replace(',', '.'));
          state.formResetFlag = true;
        }
      }
    },
    evaluate(state) {
      const {
        previousOperand, operation, formResetFlag,
      } = state;
      let { previousOperandAdditional } = state;
      let currentOperand = Number(state.currentOperand.replace(',', '.'));

      if (operation === OperationsEnum.Divide && currentOperand === 0 && !formResetFlag) {
        state.currentOperand = 'Не определено';
        state.isError = true;
        state.previousOperand = 0;
        state.previousOperandAdditional = 0;
        state.operation = OperationsEnum.None;
        state.formResetFlag = true;
        return;
      }

      if (previousOperandAdditional === 0) {
        previousOperandAdditional = previousOperand;
      }

      if (!Number.isNaN(currentOperand) && !Number.isNaN(previousOperand)) {
        switch (operation) {
          case OperationsEnum.Add:
            if (formResetFlag) {
              currentOperand += previousOperandAdditional;
            } else {
              currentOperand += previousOperand;
            }
            break;
          case OperationsEnum.Subtract:
            if (formResetFlag) {
              currentOperand -= previousOperandAdditional;
            } else {
              currentOperand = previousOperand - currentOperand;
            }
            break;
          case OperationsEnum.Multiply:
            if (formResetFlag) {
              currentOperand *= previousOperandAdditional;
            } else {
              currentOperand *= previousOperand;
            }
            break;
          case OperationsEnum.Divide:
            if (formResetFlag) {
              currentOperand /= previousOperandAdditional;
            } else {
              currentOperand = previousOperand / currentOperand;
            }
            break;
          default:
            break;
        }

        if (currentOperand > Number.MAX_SAFE_INTEGER || currentOperand < Number.MIN_SAFE_INTEGER) {
          state.currentOperand = 'Вне предела';
          state.isError = true;
          state.previousOperand = 0;
          state.previousOperandAdditional = 0;
          state.operation = OperationsEnum.None;
          state.formResetFlag = true;
          return;
        }

        if (state.previousOperandAdditional === 0) {
          state.previousOperandAdditional = previousOperand;
        }

        if (!formResetFlag) {
          state.previousOperandAdditional = Number(state.currentOperand.replace(',', '.'));
        }

        state.previousOperand = 0;
        state.currentOperand = validateOperand(currentOperand);
        state.formResetFlag = true;
      }
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
