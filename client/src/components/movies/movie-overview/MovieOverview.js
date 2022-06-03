import React from "react";
//UTILS FUNCTION
import { isStringEmpty } from "../../../utils/functions";

const MovieOverview = ({ overview }) => {
  return (
    <>
      {!isStringEmpty(overview) && (
        <div className="movieDetail__overview">
          <h1>SYNOPSIS:</h1>
          <h2>{overview}</h2>
        </div>
      )}
    </>
  );
};

export default MovieOverview;
