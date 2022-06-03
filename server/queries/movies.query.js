//MODEL
import { MOVIE } from "../models/movie.model.js";

export const getMoviesPaginate = (page = 0, limit = 40) => {
  return MOVIE.find()
    .sort({ release_date: "desc" })
    .limit(limit)
    .skip(limit * page)
    .exec();
};

export const getMovieById = (id) => {
  return MOVIE.findById(id).exec();
};

