//AXIOS
import axios from "axios";
//REDUX ACTIONS
import { deleteComment, setMovieComments, updateComment } from "./actions";
import { setSnackbar } from "../snackbar/actions";
//ROUTES
import { COMMENTS } from "../routes/routes";
//UTILS FUNCTIONS
import { getSid } from "../../utils/functions";
//ENUMS
import { ESnackbarType } from "../../enums/enums";

export const fetchMovieComments = (id) => async (dispatch) => {
  try {
    const moviesComments = await axios.get(`${COMMENTS.MOVIE_COMMENTS}${id}`, {
      headers: { Authorization: getSid() },
    });
    if (moviesComments.status === 200) {
      dispatch(setMovieComments(moviesComments.data));
      return moviesComments.data;
    }
  } catch (error) {}
};

export const deleteCommentById = (id) => async (dispatch) => {
  try {
    const deletedComment = await axios.post(
      `${COMMENTS.DELETE_COMMENT}`,
      { commentId: id },
      {
        headers: { Authorization: getSid() },
      }
    );
    if (deletedComment.status === 200) {
      dispatch(deleteComment(id));
      dispatch(
        setSnackbar({
          open: true,
          message: "Le commentaire a bien été supprimé",
          type: ESnackbarType.INFORMATION,
        })
      );
      return deletedComment.data;
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

export const createComment = (userId, movieId, text) => async (dispatch) => {
  try {
    const createdComment = await axios.post(
      `${COMMENTS.CREATE_COMMENT}`,
      { userId, movieId, text },
      {
        headers: { Authorization: getSid() },
      }
    );
    if (createdComment.status === 200) {
      dispatch(
        setSnackbar({
          open: true,
          message: "Le commentaire a été crée avec succés",
          type: ESnackbarType.INFORMATION,
        })
      );
      return createdComment.data;
    }
  } catch (error) {
    dispatch(
      setSnackbar({
        open: true,
        message: "une erreur est survenue la de la creation",
        type: ESnackbarType.ERROR,
      })
    );
  }
};

export const updateCommentById = (commentId, text) => async (dispatch) => {
  try {
    const updatedComment = await axios.put(
      `${COMMENTS.UPDATE_COMMENT}`,
      { commentId, text },
      {
        headers: { Authorization: getSid() },
      }
    );
    if (updatedComment.status === 200) {
      dispatch(updateComment({commentId, text}))
      dispatch(
        setSnackbar({
          open: true,
          message: "Le commentaire a été modifié avec succés",
          type: ESnackbarType.INFORMATION,
        })
      );
      return updatedComment.data;
    }
  } catch (error) {
    dispatch(
      setSnackbar({
        open: true,
        message: "une erreur est survenue de la modification",
        type: ESnackbarType.ERROR,
      })
    );
  }
};
