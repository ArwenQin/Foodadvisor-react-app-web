import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";
import * as service from "./restaurant-services";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
      try{
      const user = await authService.login(credentials);
      console.log("Successfully logged in");
      return user;}
      catch (error){
        alert("Invalid Username or Password");
        console.log("Login failed- Invalid Username or Password");
        throw(error);
      }
    }
);

export const registerThunk = createAsyncThunk(
    "user/register", async (userData) => {
      try{
      const user = await authService.register(userData);
        console.log("Successfully registered");
        
      return user;}
      catch (error){
        alert("Username already exists");
        console.log("Register failed- Duplicate Username");
        throw(error);
      }
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
      const response = authService.profile();
      return response;
    });
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
      return await authService.logout();
    });
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
      await authService.updateUser(user);
      console.log("Successfully updated user information",user);
      return user;
    });
export const findUserByIdThunk = createAsyncThunk(
    "users/findUserById",
    async (uid) => await authService.findUserById(uid)
);