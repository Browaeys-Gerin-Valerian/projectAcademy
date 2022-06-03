//AXIOS
import axios from "axios";
//ROUTES
import { MOVIES } from "../routes/routes";
//REDUX ACTIONS
import { setMovies, setSelectedMovie } from "../movies/actions";
import { setSnackbar } from "../snackbar/actions";
//ENUMS
import { ESnackbarType } from "../../enums/enums";

export const fetchMovies = (page) => async (dispatch) => {
  try {
    const movies = await axios.get(MOVIES.ALL_MOVIES, {
      headers: { page, limit: 40 },
    });
    if (movies.status === 200) {
      dispatch(setMovies(movies.data));
      return movies.data;
    }
  } catch (error) {
    dispatch(
      setSnackbar({
        open: true,
        message: "Une erreur est survenue",
        type: ESnackbarType.ERROR,
      })
    );
  }
};

export const fetchMovieDetail = (id) => async (dispatch) => {
  try {
    const movies = await axios.get(`${MOVIES.MOVIE_DETAIL}/${id}`);
    if (movies.status === 200) {
      dispatch(setSelectedMovie(movies.data));
      return movies.data;
    }
  } catch (error) {
    dispatch(
      setSnackbar({
        open: true,
        message: "Une erreur est survenue",
        type: ESnackbarType.ERROR,
      })
    );
  }
};
