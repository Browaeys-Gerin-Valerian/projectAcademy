//STATUS
import { STATUS_CODE } from "../config/status.js";
const { OK } = STATUS_CODE;

//QUERIES
import {
  getFavoritesMovies,
  addNewFavorites,
  deleteFavorites,
} from "../queries/favorites.query.js";

//GET ALL FAVORITES OF THE USER
export const getFavoritesController = async (req, res) => {
  try {
    const { favorites } = req.body;
    const favoritesMovies = await getFavoritesMovies(favorites);
    res.json(favoritesMovies);
  } catch (error) {
    throw error;
  }
};

//ADD FAVORITE OF THE LOGGED USER
export const addNewFavoritesController = async (req, res) => {
  try {
    const {
      body: { newFavorites },
      user: { _id },
    } = req;
    await addNewFavorites(_id, newFavorites);
    res.status(OK).end();
  } catch (error) {
    throw error;
  }
};

//DELETE SELECTED FAVORITES OF THE LOGGED USER
export const deleteFavoritesController = async (req, res) => {
  try {
    const {
      body: { favoritesToDelete },
      user: { _id },
    } = req;
    const test = await deleteFavorites(_id, favoritesToDelete);
    res.status(OK).end();
  } catch (error) {
    throw error;
  }
};
