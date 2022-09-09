import { type RootState } from "@/lib";

export const countSelector = (state: RootState) => state.counter.value;
