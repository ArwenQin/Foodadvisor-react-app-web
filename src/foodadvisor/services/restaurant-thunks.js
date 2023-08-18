import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from '../services/restaurant-services';

export const addNewRestaurantThunk = createAsyncThunk(
    'restaurants/addNew',
    async (restaurantInfo) => {
        const newRestaurant = await service.addNewRestaurant(restaurantInfo);
        return newRestaurant;
    }
);
export const findRestaurantsThunk = createAsyncThunk(
    "restaurants/findRestaurants",
    async () => await service.findRestaurants()
);

export const deleteRestaurantThunk = createAsyncThunk(
    'restaurants/deleteRestaurant',
    async (resId) => {
        await service.deleteRestaurant(resId)
        return resId
    })

export const createRestaurantThunk = createAsyncThunk(
    'restaurants/createRestaurant',
    async (res) => {
        const newRestaurant = await service.createRestaurant(res)
        return newRestaurant
    })

export const updateRestaurantThunk =
    createAsyncThunk(
        'restaurants/updateRestaurant',
        async (res) =>
            await service.updateRestaurant(res)
    )

export const findResByNameThunk = createAsyncThunk(
    "restaurants/findResByName",
    async (name) => await service.findResByName(name)
);
export const searchRestaurantsThunk = createAsyncThunk(
    "restaurants/searchRestaurants",
    async (query) => await service.searchRestaurants(query)
);
