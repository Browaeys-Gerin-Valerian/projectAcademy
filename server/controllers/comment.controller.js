//COMMENT QUERY
import {
  createNewComment,
  findCommentById,
  findCommentsByMovie,
  findCommentsByMovieWithUsers,
  findCommentsByUser,
  deleteComment,
  updateComment,
} from "../queries/comments.query.js";
//HTTP STATUS
import { STATUS_CODE } from "../config/status.js";
const { OK } = STATUS_CODE;

export const createCommentController = async (req, res) => {
  try {
    //DECONSTRUCT REQ OBJECT
    const { body, user } = req;
    //DECONSTRUCT USER OBJECCT
    const { _id, firstname, lastname } = user;
    //PROMISE RETURN OF CREATED COMMENT
    const newComment = await createNewComment(body);
    const newCommentCreated = { ...newComment };
    //WE RETURN A USER LIGHT AS RESPONSE
    const response = {...newCommentCreated._doc, userId:{_id, firstname, lastname}}
    res.json(response);
  } catch (error) {
    throw error;
  }
};
export const getCommentDetailController = async (req, res) => {
  try {
    //DECONSTRUCT PARAMS
    const { id } = req.params;
    //PROMISE RETURN OF COMMENT
    const comment = await findCommentById(id);
    res.json(comment);
  } catch (error) {
    throw error;
  }
};
export const getMovieCommentsController = async (req, res) => {
  try {
    //DECONSTRUCT PARAMS
    const { id } = req.params;
    //PROMISE RETURN OF COMMENT BASED ON MOVIE ID
    const commentsByMovie = await findCommentsByMovie(id);

    //WE MAP OF EVERY RESULT TO CONTRUCT AN ARRAY OF USER ID
    const userIds = commentsByMovie.map((comment) => comment.userId);
    const commentsByMovieWithUsers = await findCommentsByMovieWithUsers(
      userIds
    );
    res.json(commentsByMovieWithUsers);
  } catch (error) {
    throw error;
  }
};
export const getUserCommentsController = async (req, res) => {
  try {
    const { id } = req.params;
    const commentsByUser = await findCommentsByUser(id);
    res.json(commentsByUser);
  } catch (error) {
    throw error;
  }
};
export const deleteCommentController = async (req, res) => {
  try {
    const { commentId } = req.body;
    await deleteComment(commentId);
    res.status(200).end();
  } catch (error) {
    throw error;
  }
};
export const updateCommentController = async (req, res) => {
  try {
    const { body } = req;
    const updatedComment = await updateComment(body);
    res.json(updatedComment).end();
  } catch (error) {
    throw error;
  }
};
