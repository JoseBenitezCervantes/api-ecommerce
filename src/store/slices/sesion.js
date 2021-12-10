import { createSlice } from "@reduxjs/toolkit";

export const sesionSlice = createSlice({
  name: "sesion",
  initialState: {
    isLogin: false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload
    },
  },
});

export const { setLogin } = sesionSlice.actions;

export default sesionSlice.reducer;