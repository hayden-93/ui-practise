import {
  type TypedUseSelectorHook,
  useDispatch as useReactReduxDispatch,
  useSelector as useReactReduxSelector,
} from "react-redux";

import type { RootState, AppDispatch } from "./store";

export const useDispatch: () => AppDispatch = useReactReduxDispatch;
export const useSelector: TypedUseSelectorHook<RootState> =
  useReactReduxSelector;
