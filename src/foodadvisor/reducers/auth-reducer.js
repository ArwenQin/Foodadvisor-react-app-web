import { createSlice } from "@reduxjs/toolkit";
import {
  findUserByIdThunk,
  loginThunk, logoutThunk, profileThunk,
  registerThunk,
  updateUserThunk
} from "../services/auth-thunks";
import {findResByNameThunk} from "../services/restaurant-thunks";


const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser: null,
  visitingUser: null},
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [loginThunk.rejected]: (state, { payload }) => {
      state.currentUser = null;
    },

    [registerThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = null;
    },

    [registerThunk.rejected]: (state, { payload }) => {
      state.currentUser = null;}
    ,

    [logoutThunk.fulfilled]: (state) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [profileThunk.rejected]: (state, { payload }) => {
      state.currentUser = null;
    },
    [profileThunk.pending]: (state, action) => {
      state.currentUser = null;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [findUserByIdThunk.pending]:
        (state) => {
          state.loading = true
          state.visitingUser = null
        },
    [findUserByIdThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.visitingUser = payload
        },
    [findUserByIdThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        }
  },
});
export default authSlice.reducer;

