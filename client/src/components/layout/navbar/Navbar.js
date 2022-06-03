import React, { useState } from "react";
//ROUTER
import { Link } from "react-router-dom";
//ASSETS
import navbarBurger from "../../../assets/svg/navbarBurger.svg";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../../../redux/snackbar/actions";
import { resetAuthData, setLogged } from "../../../redux/auth/actions";
import { resetComments } from "../../../redux/comments/actions";
import { isNavExpanded } from "../../../redux/navbar/reducer";
import { setNavbarExpand } from "../../../redux/navbar/actions";
//ENUMS
import { EModalType, ESnackbarType } from "../../../enums/enums";
//UTILS FUNCTIONS
import { removeItemFromLocalStorage, getSid } from "../../../utils/functions";
import { setModal, setModalType } from "../../../redux/modal/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const isNavbarExpanded = useSelector(isNavExpanded)

  const toogleNavExpand = () => {
    dispatch(setNavbarExpand())
  };

  const handleDisconnect = () => {
    removeItemFromLocalStorage("sid");
    dispatch(setLogged());
    dispatch(resetAuthData());
    dispatch(resetComments());
    dispatch(
      setSnackbar({
        open: true,
        message: "Vous avez été déconnecté avec succés",
        type: ESnackbarType.INFORMATION,
      })
    );
  };

  const handleOpenModal = () => {
    dispatch(setModal(true));
    dispatch(setModalType(EModalType.LOGIN));
  };

  return (
    <nav className="navigation">
      <Link to="/" className="logo">
        NETFILMS
      </Link>
      <button className="hamburger" onClick={toogleNavExpand}>
        <img src={navbarBurger} alt="navbar-menu" />
      </button>
      <div
        className={
          isNavbarExpanded ? `navigation-menu expanded` : `navigation-menu`
        }
      >
        <ul>
          <li>
            <Link to="/movies">Liste des films</Link>
          </li>
          {getSid() && (
            <li>
              <Link to="/favorites">Mes favoris</Link>
            </li>
          )}
          {getSid() && (
            <li>
              <Link to="/account">Mon compte</Link>
            </li>
          )}
          {getSid() && (
            <li onClick={handleDisconnect}>
              <Link to="/">Deconnexion</Link>
            </li>
          )}
          {!getSid() && (
            <li>
              <Link to="/register">S'inscrire</Link>
            </li>
          )}
          {!getSid() && (
            <li onClick={handleOpenModal}>
              <span>Se connecter</span>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
