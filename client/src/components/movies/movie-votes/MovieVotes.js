import React from "react";
//UTILS FUNCTIONS
import { isMovieHasVotes } from "../../../utils/functions";

const MovieVotes = ({ vote_average, vote_count }) => {
  return <h2>{isMovieHasVotes(vote_average, vote_count)}</h2>;
};

export default MovieVotes;
