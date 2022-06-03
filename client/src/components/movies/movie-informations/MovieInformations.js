import React from "react";
//ENUMS
import { EDateLocalTimeZone } from "../../../enums/enums";
//UTILS
import {
  isForAdult,
  convertUtcToLocalDateString,
} from "../../../utils/functions";

const MovieInformations = ({
  title,
  release_date,
  original_language,
  adult,
}) => {
  return (
    <div className="movieDetail__mainInformations">
      {" "}
      <h2>Titre: {title}</h2>
      <h2>
        Date de sortie:{" "}
        {convertUtcToLocalDateString(release_date, EDateLocalTimeZone.FR)}
      </h2>
      <h2>Langue d'origine: {original_language}</h2>
      <h2>{isForAdult(adult)}</h2>
    </div>
  );
};

export default MovieInformations;
