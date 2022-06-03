import React, { useEffect } from "react";
//REACT ROUTER
import { useParams } from "react-router-dom";
//COMPONENTS
import {
  CommentList,
  MovieInformations,
  MovieOverview,
  MoviePoster,
  MovieVotes,
} from "../../components";
//UTILS FUNCTIONS
import { isMovieHasVotes, getSid } from "../../utils/functions";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { selectedMovie } from "../../redux/movies/reducer";
import { fetchMovieDetail } from "../../redux/movies/thunks";
import { movieComments } from "../../redux/comments/reducer";
import { fetchMovieComments } from "../../redux/comments/thunks";
import { isLogged } from "../../redux/auth/reducer";

const MovieDetail = () => {
  //URL PARAM
  const { id } = useParams();

  //REDUX HOOKS
  const dispatch = useDispatch();
  const movie = useSelector(selectedMovie);
  const isUserLogged = useSelector(isLogged);

  const { _id, overview, poster_path, title, vote_average, vote_count } = movie;
  const comments = useSelector(movieComments);

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, []);

  useEffect(() => {
    if (getSid()) {
      dispatch(fetchMovieComments(id));
    }
  }, [isUserLogged]);

  return (
    <div className="movieDetail">
      <div className="movieDetail__informations">
        <MoviePoster poster_path={poster_path} title={title} />
        <MovieInformations {...movie} />
      </div>
      <div className="movieDetail__voteAndOverviewContainer">
        <MovieVotes vote_average={vote_average} vote_count={vote_count} />
        <MovieOverview overview={overview} />
      </div>
      {getSid() && <CommentList movieId={id} comments={comments} />}
    </div>
  );
};

export default MovieDetail;
