//MODEL
import { MOVIE } from "../models/movie.model.js";

export const searchMoviesByName = (page = 0, limit = 40, name="") => {
  return MOVIE.find({ title: { $regex: name, $options: "i" } })
    .sort({ release_date: "desc" })
    .limit(limit)
    .skip(limit * page)
    .exec();
};
