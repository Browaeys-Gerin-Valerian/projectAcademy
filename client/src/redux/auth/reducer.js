import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authUser: {},
    isLogged: false,
  },
  reducers: {
    setLogged: (state, { payload }) => {
      state.isLogged = !state.isLogged;
    },
    setAuthUser: (state, { payload }) => {
      state.authUser = payload;
    },
    resetAuthData: (state, { payload }) => {
      state.authUser = {};
    },
    addFavoriteToUser: (state, { payload }) => {
      state.authUser.favorites.push(payload);
    },
    deleteFavoriteToUser: (state, { payload }) => {
      state.authUser.favorites = state.authUser.favorites.filter(
        (favorite) => favorite !== payload
      );
    },
    deleteAllFavoritesInUser: (state, { payload }) => {
      state.authUser.favorites = [];
    },
  },
});

export const isLogged = (state) => state.auth.isLogged;
export const authUserData = (state) => state.auth.authUser;
