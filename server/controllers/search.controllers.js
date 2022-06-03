//SEARCH QUERIES
import { searchMoviesByName } from "../queries/search.query.js";

export const searchController = async (req, res) => {
  try {
    const { search, page, limit } = req.headers;
    const searchMovies = await searchMoviesByName(page, limit, search);
    res.json(searchMovies);
  } catch (error) {
    throw error;
  }
};
