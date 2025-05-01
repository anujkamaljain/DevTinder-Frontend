import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addRequest: (state, action) => action.payload,
    removeRequest: (state, action) => {
      const newArry = state.filter((r) => r._id !== action.payload);
      return newArry;
    },
  },
});

export const { addRequest, removeRequest } = requestsSlice.actions;

export default requestsSlice.reducer;
