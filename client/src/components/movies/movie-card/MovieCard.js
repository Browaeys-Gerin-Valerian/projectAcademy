import React from "react";
//COMPONENTS
import { FavoriteStar } from "../../";
//ROUTER
import { Link } from "react-router-dom";
//UTILS FUNCTIONS
import { convertUtcToLocalDateString, getSid } from "../../../utils/functions";
//ENUMS
import { EDateLocalTimeZone } from "../../../enums/enums";

const MovieCard = ({
  _id,
  title,
  release_date,
  poster_path,
  isFavorite,
  toogleFavorite,
}) => {
  return (
    <div className="movieCard">
      <div className="movieCard__imgContainer">
        <Link to={`/movie/${_id}`}>
          <img src={poster_path} alt={title} />
        </Link>
      </div>
      {getSid() && (
        <FavoriteStar
          isFavorite={isFavorite}
          toogleFavorite={toogleFavorite}
          movieId={_id}
        />
      )}{" "}
      <div className="movieCard__infos">
        <Link to={`/movie/${_id}`}>
          {" "}
          <h3>{title}</h3>
          <h3>
            Date de sortie:{" "}
            {convertUtcToLocalDateString(release_date, EDateLocalTimeZone.FR)}
          </h3>
        </Link>
      </div>
      <Link to={`/movie/${_id}`} className="movieCard__detail">
        <h3>Voir le Detail</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
