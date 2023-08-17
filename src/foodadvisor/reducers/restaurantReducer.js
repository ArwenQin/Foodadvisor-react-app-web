import { createSlice } from "@reduxjs/toolkit";
import {
  updateRestaurantThunk,
  createRestaurantThunk,
  deleteRestaurantThunk,
  findRestaurantsThunk,
  findResByNameThunk,
  addNewRestaurantThunk,
} from "../services/restaurant-thunks";

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
};

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  extraReducers: {
    [updateRestaurantThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const resIndex = state.restaurants.findIndex((r) => r._id === payload._id);
      state.restaurants[resIndex] = { ...state.restaurants[resIndex], ...payload };
    },
    [createRestaurantThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.restaurants.push(payload);
    },
    [deleteRestaurantThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.restaurants = state.restaurants.filter(r => r._id !== payload);
    },
    [findRestaurantsThunk.pending]: (state) => {
      state.loading = true;
      state.restaurants = [];
    },
    [findRestaurantsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.restaurants = payload;
    },
    [findRestaurantsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [findResByNameThunk.pending]: (state) => {
      state.loading = true;
      state.restaurants = [];
    },
    [findResByNameThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.restaurants = payload;
    },
    [findResByNameThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addNewRestaurantThunk.pending]: (state) => {
      state.loading = true;
    },
    [addNewRestaurantThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.restaurants.push(payload);
    },
    [addNewRestaurantThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const {
  createRestaurant,
  deleteRestaurant,
  findRestaurants,
} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
