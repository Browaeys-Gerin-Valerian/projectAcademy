import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    selectedComment: {},
  },
  reducers: {
    setMovieComments: (state, { payload }) => {
      state.comments = payload;
    },
    deleteComment: (state, { payload }) => {
      state.comments = state.comments.filter(
        (comment) => comment._id !== payload
      );
    },
    addComment: (state, { payload }) => {
      state.comments.push(payload);
    },
    updateComment: (state, { payload }) => {
      const { commentId, text } = payload;
      const commentIndex = state.comments.findIndex(
        (comment) => comment._id === commentId
      );
      if (commentIndex !== -1) {
        state.comments[commentIndex].text = text;
      }
    },
    resetComments: (state, { payload }) => {
      state.comments = [];
    },
  },
});

export const movieComments = (state) => state.comment.comments;
