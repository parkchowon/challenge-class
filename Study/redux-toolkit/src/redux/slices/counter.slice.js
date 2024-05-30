import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  school: {
    class: {
      age: 10,
    },
  },
};

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state, action) => {
      const value = action.payload;
      state.count = state.count + value;
    },
    decrement: (state, action) => {
      const value = action.payload;
      state.count = state.count - value;
    },
  },
});

export const countReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
