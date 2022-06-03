import { COMMENT } from "../models/comment.model.js";

export const createNewComment = async (comment) => {
  const { userId, movieId, text } = comment;

  //PROMISE RETURN OF USER CREATION
  const newComment = new COMMENT({
    userId,
    movieId,
    text,
    isDeleted: false,
  });
  return newComment.save();
};

export const findCommentById = (id) => {
  return COMMENT.findById(id).exec();
};

export const findCommentsByMovie = (movieId) => {
  return COMMENT.find({ movieId }).exec();
};

export const findCommentsByMovieWithUsers = (usersIds = []) => {
  return COMMENT.find({ userId: usersIds })
    .populate("userId", "_id firstname lastname")
    .exec();
};

export const findCommentsByUser = (userId) => {
  return COMMENT.find({ userId }).exec();
};

export const deleteComment = (commentId) => {
  return COMMENT.deleteOne({ _id: commentId }).exec();
};

export const updateComment = (newComment) => {
  const { commentId, text } = newComment;
  return COMMENT.updateOne({ _id: commentId }, { $set: { text } });
};
