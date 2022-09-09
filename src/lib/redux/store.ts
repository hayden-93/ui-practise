import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./reducer";

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
