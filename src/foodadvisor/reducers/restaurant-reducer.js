import { createSlice } from "@reduxjs/toolkit";

import {updateRestaurantThunk,createRestaurantThunk,deleteRestaurantThunk,findRestaurantsThunk,findResByNameThunk} from "../services/restaurant-thunks";

const initialState = {
  restaurant: [],
  currentResName: null,
  loading: false
}


const restaurantsSlice = createSlice({
  name: 'restaurant',
  initialState,
  extraReducers: {
    [updateRestaurantThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const resNdx = state.restaurant.findIndex((r) => r._id === payload._id)
          state.restaurant[resNdx] = { ...state.restaurant[resNdx], ...payload }
        },

    [createRestaurantThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.restaurant.push(payload)
        },


    [deleteRestaurantThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.restaurant = state.restaurant .filter(r => r._id !== payload)
        },

    [findRestaurantsThunk.pending]:
        (state) => {
          state.loading = true
          state.restaurant = []
        },
    [findRestaurantsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.restaurant = payload
        },
    [findRestaurantsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },

    [findResByNameThunk.pending]:
        (state) => {
          state.loading = true
          state.currentResName = null
        },
    [findResByNameThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.currentResName = payload
        },
    [findResByNameThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        }
  },

  reducers: {

  }

});

export const {createRestaurant, deleteRestaurant,findRestaurants} = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
