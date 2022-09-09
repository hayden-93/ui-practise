import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export type { CounterState };

export const {
  caseReducers: counterCaseReducers,
  getInitialState: counterInitialState,
  name: counterSliceName,
  reducer: counterReducer,
} = slice;
export const { increment, decrement, incrementByAmount } = slice.actions;

export default slice;
