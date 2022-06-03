import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
    },
    deleteAllFavorites: (state, { payload }) => {
      state.favorites = [];
    },
    deleteInFavoriteList: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite._id !== payload
      );
    },
  },
});

export const detailedFavoriteList = (state) => state.favorite.favorites;
