import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./explore-service";


export const findExploresThunk = createAsyncThunk(
    "explores/findExplores",
    async () => await service.findExplore()
);

export const deleteExploreThunk = createAsyncThunk(
    'explores/deleteExplore',
    async (resId) => {
      await service.deleteExplore(resId)
      return resId
    })

export const createExploreThunk = createAsyncThunk(
    'explores/createExplore',
    async (res) => {
      const newExplore = await service.createExplore(res)
      return newExplore
    })

export const updateExploreThunk =
    createAsyncThunk(
        'explores/updateExplore',
        async (res) =>
            await service.updateExplore(res)
    )

