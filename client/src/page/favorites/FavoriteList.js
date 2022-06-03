import React from "react";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { authUserData } from "../../redux/auth/reducer";
import {
  // deleteAllFromFavorites,
  deleteToFavorite,
} from "../../redux/favorites/thunks";
import { deleteInFavoriteList } from "../../redux/favorites/actions";
import { detailedFavoriteList } from "../../redux/favorites/reducer";
//COMPONENT
import { MovieCard } from "../../components";
//UTILS
import { isArrayEmpty } from "../../utils/functions";
//ICON
import { AiFillDelete } from "react-icons/ai";
import { setModal, setModalType } from "../../redux/modal/actions";
import { EModalType } from "../../enums/enums";

const FavoriteList = () => {
  //REDUX HOOK
  const dispatch = useDispatch();
  const { favorites } = useSelector(authUserData);
  const favoriteList = useSelector(detailedFavoriteList);

  const isFavorite = (id) => {
    return favorites?.includes(id);
  };

  const deleteFavorite = (movieid, isfavorite) => {
    if (isfavorite) {
      dispatch(deleteToFavorite(movieid));
      dispatch(deleteInFavoriteList(movieid));
    }
  };


  const handleOpenModal = () => {
    dispatch(setModal(true));
    dispatch(setModalType(EModalType.DELETE_FAVORITES));
  };

  return (
    <div className="favoriteList">
      {isArrayEmpty(favoriteList) ? (
        <h1 className="favoriteList__noContent">
          Vous n'avez aucun favoris pour le moment, consulter la liste de fims
          pour commencer a en ajouter{" "}
        </h1>
      ) : (
        <>
          <AiFillDelete
            className="favoriteList__deleteAll"
            onClick={handleOpenModal}
          />{" "}
          {favoriteList?.map((favorite, index) => (
            <React.Fragment key={index}>
              <MovieCard
                {...favorite}
                isFavorite={isFavorite(favorite._id)}
                toogleFavorite={deleteFavorite}
              />
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default FavoriteList;
