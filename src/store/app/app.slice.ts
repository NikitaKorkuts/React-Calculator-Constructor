import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ModeEnum } from '../../types/modeSwitch.types';

export type AppInitialStateType = {
  mode: ModeEnum
};

const initialState: AppInitialStateType = {
  mode: ModeEnum.Constructor,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<ModeEnum>) {
      state.mode = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
