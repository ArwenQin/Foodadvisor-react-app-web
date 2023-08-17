import { createSlice } from "@reduxjs/toolkit";
import { updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk, searchTuitsThunk,rateRestaurantThunk } from "../services/tuits-thunks";
const initialState = {
  tuits: [],
  searchResults: [],
  loading: false,
  error: null
}


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
        state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
      },

    [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
      },


    [deleteTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits = state.tuits.filter(t => t._id !== payload)
      },

    [findTuitsThunk.pending]:
      (state) => {
        state.loading = true
        state.tuits = []
      },
    [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits = payload
      },
    [findTuitsThunk.rejected]:
      (state, action) => {
        state.loading = false
        state.error = action.error
      },
    [searchTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.searchResults = [];
    },

    [searchTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.searchResults = payload;
    },

    [searchTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [rateRestaurantThunk.pending]: (state) => {
      state.loading = true;
  },
  
  [rateRestaurantThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitIndex = state.tuits.findIndex(t => t._id === payload._id);
      if (tuitIndex !== -1) {
          state.tuits[tuitIndex] = payload;
      } else {
          state.tuits.push(payload);
      }
  },
  
  [rateRestaurantThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
  }
  

  },

  reducers: {

  }

});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
