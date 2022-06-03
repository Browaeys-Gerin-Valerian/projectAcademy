//QUERY
import { getMoviesPaginate, getMovieById } from "../queries/movies.query.js";

import { MOVIE } from "../models/movie.model.js";

//MULTIPLE MOVIES
export const getMoviesController = async (req, res) => {
  try {
    const { page, limit } = req.headers;
    const movies = await getMoviesPaginate(page, limit);
    res.json(movies);
  } catch (error) {
    throw error;
  }
};

//ONE MOVIE
export const getMovieDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await getMovieById(id);
    res.json(movie);
  } catch (error) {
    throw error;
  }
};
