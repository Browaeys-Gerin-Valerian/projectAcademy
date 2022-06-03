import React from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { deleteAllFromFavorites } from "../../redux/favorites/thunks";
import { authUserData } from "../../redux/auth/reducer";
import { setModal } from "../../redux/modal/actions";
//UTILS
import { arrayLength } from "../../utils/functions";

const DeleteFavorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(authUserData);

  const handleCloseModal = () => {
    dispatch(setModal(false));
  };

  const deleteAllFavorites = () => {
    dispatch(deleteAllFromFavorites(favorites));
    dispatch(handleCloseModal());
  };

  return (
    <div className="favoriteDelete">
      <h1 className="favoriteDelete__confirmText">
        Confirmer vous la suppression de{" "}
        {arrayLength(favorites) > 1
          ? `vos ${arrayLength(favorites)} favoris`
          : `ce favoris`}{" "}
        ?
      </h1>
      <div className="favoriteDelete__buttonContainer">
        <button
          className="button__deleteFavorites button__deleteFavorites__cancel"
          onClick={handleCloseModal}
        >
          Annuler
        </button>
        <button
          className="button__deleteFavorites button__deleteFavorites__submit"
          onClick={deleteAllFavorites}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default DeleteFavorites;
