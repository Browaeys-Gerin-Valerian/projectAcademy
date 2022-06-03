import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    pagination: { page: 0, hasMore: true },
    selectedMovie: {},
  },
  reducers: {
    setMovies: (state, { payload }) => {
      state.movies = [...state.movies, ...payload];
    },
    setSelectedMovie: (state, { payload }) => {
      state.selectedMovie = payload;
    },
    setPage: (state, { payload }) => {
      state.pagination.page = state.pagination.page + 1;
    },
  },
});


//SELECTORS
export const movies = (state) => state.movie.movies;
export const selectedMovie = (state) => state.movie.selectedMovie;
export const paginateMovies = (state) => state.movie.pagination;
