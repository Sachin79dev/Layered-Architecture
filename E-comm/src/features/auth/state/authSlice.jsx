import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isloading: true,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isloading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isloading = false;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
