//AXIOS
import axios from "axios";
//REDUX
import { addFavoriteToUser, deleteFavoriteToUser, deleteAllFavoritesInUser } from "../auth/actions";
import { deleteAllFavorites, setFavorites } from "./actions";
//ROUTES
import { FAVORITES } from "../routes/routes";
import { setSnackbar } from "../snackbar/actions";
//ENUMS
import { ESnackbarType } from "../../enums/enums";
//UTILS
import { arrayLength, getSid } from "../../utils/functions";

export const getAllFavorites = (favorites) => async (dispatch) => {
  try {
    const addedFavorite = await axios.post(
      FAVORITES.ALL_FAVORITES,
      {
        favorites,
      },
      {
        headers: { Authorization: getSid() },
      }
    );
    if (addedFavorite?.status === 200) {
      dispatch(setFavorites(addedFavorite.data));
      return addedFavorite.data;
    }
  } catch (error) {
    dispatch(
      setSnackbar({
        open: true,
        message: "une erreur est survenue",
        type: ESnackbarType.ERROR,
      })
    );
  }
};

export const addToFavorites = (movieId) => async (dispatch) => {
  const newFavorites = [movieId];
  try {
    const addedFavorite = await axios.post(
      FAVORITES.ADD_FAVORITE,
      {
        newFavorites,
      },
      {
        headers: { Authorization: getSid() },
      }
    );
    if (addedFavorite?.status === 200) {
      dispatch(addFavoriteToUser(movieId));
      dispatch(
        setSnackbar({
          open: true,
          message: "Le favoris a bien été ajouté",
          type: ESnackbarType.INFORMATION,
        })
      );

      return addedFavorite.data;
    }
  } catch (error) {
    dispatch(
      setSnackbar({
        open: true,
        message: "le favoris n'a pas pu etre ajouté",
        type: ESnackbarType.ERROR,
      })
    );
  }
};

export const deleteToFavorite = (movieId) => async (dispatch) => {
  const favoritesToDelete = [movieId];
  try {
    const addedFavorite = await axios.put(
      FAVORITES.DELETE_FAVORITES,
      {
        favoritesToDelete,
      },
      {
        headers: { Authorization: getSid() },
      }
    );
    if (addedFavorite?.status === 200) {
      dispatch(deleteFavoriteToUser(movieId));
      dispatch(
        setSnackbar({
          open: true,
          message: "Le favoris a bien été supprimé",
          type: ESnackbarType.INFORMATION,
        })
      );

      return addedFavorite.data;
    }
  } catch (error) {
    dispatch(
      setSnackbar({
        open: true,
        message: "le favoris n'a pas pu etre supprimé",
        type: ESnackbarType.ERROR,
      })
    );
  }
};

export const deleteAllFromFavorites = (moviesIds) => async (dispatch) => {
  try {
    const addedFavorite = await axios.put(
      FAVORITES.DELETE_FAVORITES,
      {
        favoritesToDelete: moviesIds,
      },
      {
        headers: { Authorization: getSid() },
      }
    );
    if (addedFavorite?.status === 200) {
      dispatch(deleteAllFavorites())
      dispatch(deleteAllFavoritesInUser())
      const favoritesLength = arrayLength(moviesIds)
      dispatch(
        setSnackbar({
          open: true,
          message:favoritesLength > 1? `les ${favoritesLength} favoris ont bien été supprimés` : `le favoris a bien été supprimé`,
          type: ESnackbarType.INFORMATION,
        })
      );

      return addedFavorite.data;
    }
  } catch (error) {
    dispatch(
      setSnackbar({
        open: true,
        message: "les favoris n'ont pas pu etre supprimé",
        type: ESnackbarType.ERROR,
      })
    );
  }
};
