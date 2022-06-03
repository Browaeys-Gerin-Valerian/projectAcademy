import React from "react";

const MoviePoster = ({poster_path, title}) => {
  return (
    <div className="movieDetail__posterContainer">
      <img src={poster_path} alt={`${title} poster`} />
    </div>
  );
};

export default MoviePoster;
