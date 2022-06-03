import { commentSlice } from "./reducer";

export const {
  setMovieComments,
  setUserComments,
  deleteComment,
  addComment,
  updateComment,
  resetComments
} = commentSlice.actions;
