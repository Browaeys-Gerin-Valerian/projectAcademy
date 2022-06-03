import React from "react";
//ICON
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const FavoriteStar = ({ isFavorite, toogleFavorite, movieId }) => {
  return (
    <div
      className={`favoriteStar ${
        isFavorite ? `favoriteStar__active` : `favoriteStar__idle`
      }`}
      onClick={() => toogleFavorite(movieId, isFavorite)}
    >
      {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
    </div>
  );
};

export default FavoriteStar;
