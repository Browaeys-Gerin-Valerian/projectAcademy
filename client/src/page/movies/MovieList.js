import React, { useState, useEffect, useRef } from "react";
//COMPONENT
import { MovieCard } from "../../components";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { movies, paginateMovies } from "../../redux/movies/reducer";
import { fetchMovies } from "../../redux/movies/thunks";
import { setPage } from "../../redux/movies/actions";
import { authUserData } from "../../redux/auth/reducer";
import { addToFavorites, deleteToFavorite } from "../../redux/favorites/thunks";

const MovieList = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(movies);

  const { favorites } = useSelector(authUserData);
  const { page } = useSelector(paginateMovies);

  const [loading, setLoading] = useState(false);

  const firstRender = useRef(true);

  const isFavorite = (id) => {
    return favorites?.includes(id);
  };

  const toogleFavorite = (movieid, isfavorite) => {
    isfavorite
      ? dispatch(deleteToFavorite(movieid))
      : dispatch(addToFavorites(movieid));
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      dispatch(fetchMovies(page)).then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 10000)
      );
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const { innerHeight, scrollY } = window;
    let userScrollHeight = innerHeight + scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight + 100 >= windowBottomHeight && !loading) {
      dispatch(setPage());
      setLoading(true);
    }
  };

  return (
    <div className="movieList">
      {movieList?.map((movie, index) => (
        <React.Fragment key={index}>
          <MovieCard
            {...movie}
            isFavorite={isFavorite(movie._id)}
            toogleFavorite={toogleFavorite}
          />
          {loading && <div>Chargement en cours</div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MovieList;
