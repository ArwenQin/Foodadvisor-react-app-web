import { createSlice } from "@reduxjs/toolkit";

import {updateExploreThunk,createExploreThunk,deleteExploreThunk,findExploresThunk} from "../services/explore-thunks";
const initialState = {
  explores: [],
  loading: false
}


const exploresSlice = createSlice({
  name: 'explores',
  initialState,
  extraReducers: {
    [updateExploreThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const resNdx = state.explores.findIndex((r) => r._id === payload._id)
          state.explores[resNdx] = { ...state.explores[resNdx], ...payload }
        },

    [createExploreThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.explores.push(payload)
        },


    [deleteExploreThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.explores = state.explores .filter(r => r._id !== payload)
        },

    [findExploresThunk.pending]:
        (state) => {
          state.loading = true
          state.explores = []
       },
    [findExploresThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.explores = payload
        },
    [findExploresThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        }
  },

  reducers: {

  }

});

export const {createExplore, deleteExplore} = exploresSlice.actions;
export default exploresSlice.reducer;
