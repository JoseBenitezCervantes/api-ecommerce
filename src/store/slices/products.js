import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list.push(action.payload);
    },
    deleteUserList: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload)
    },
  },
});

export const { setUserList, deleteUserList } = productsSlice.actions;

export default productsSlice.reducer;