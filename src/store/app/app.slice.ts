import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ModeEnum } from '../../types/modeSwitch.types';

export type AppInitialStateType = {
  mode: ModeEnum
  componentsSequence
  newComponentsSequence: number[],
};

const initialState: AppInitialStateType = {
  mode: ModeEnum.Constructor,
  componentsSequence: [0, 1, 2, 3], // sequence of calculator components IDs in order of rendering from top to bottom
  newComponentsSequence: [], // sequence of calculator components IDs, which are assigned during calculator construction
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
      state.mode = action.payload;
    },
    setNewComponentsSequence(state, action: PayloadAction<number[]>) {
      state.newComponentsSequence = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
