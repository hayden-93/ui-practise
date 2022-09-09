import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from "./slices/counter/slice";

export const reducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});
