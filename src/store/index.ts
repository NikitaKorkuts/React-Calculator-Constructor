import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer } from './app/app.slice';

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
