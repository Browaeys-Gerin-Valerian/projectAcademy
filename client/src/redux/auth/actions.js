import { authSlice } from "./reducer";

export const {
  setLogged,
  setAuthUser,
  resetAuthData,
  addFavoriteToUser,
  deleteFavoriteToUser,
  deleteAllFavoritesInUser
} = authSlice.actions;
