import { MOVIE } from "../models/movie.model.js";
import { USER } from "../models/user.model.js";

export const getFavoritesMovies = (favorites = []) => {
  return MOVIE.find({ _id: favorites }).exec();
};

export const addNewFavorites = (userId, newFavorites = []) => {
  return USER.updateOne(
    { _id: userId },
    { $push: { favorites: [...newFavorites] } }
  ).exec();
};

export const deleteFavorites = (userId, favoritesToDelete = []) => {
  return USER.updateOne(
    { _id: userId },
    { $pull: { favorites: { $in: favoritesToDelete } } }
  ).exec();
};
