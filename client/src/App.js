import React, { useEffect } from "react";
//ROUTER
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/movies/thunks";
import { refreshAuthUser } from "./redux/auth/thunks";
import { getAllFavorites } from "./redux/favorites/thunks";
import { authUserData } from "./redux/auth/reducer";
import { isOpen } from "./redux/modal/reducer";
import { setModal } from "./redux/modal/actions";
import { isNavExpanded } from "./redux/navbar/reducer";
import { closeNavbar } from "./redux/navbar/actions";
//UTILS FUNCTIONS
import { getSid } from "./utils/functions";
//MAIN LAYOUT
import { Layout, Footer, Navbar, PrivateRoute } from "./components";
//MAIN PAGE
import {
  Homepage,
  MovieList,
  MovieDetail,
  Register,
  FavoriteList,
  Profil,
} from "./page";

const App = () => {
  //FETCH FIRST MOVIE PAGE ON APP LOAD
  const dispatch = useDispatch();
  const location = useLocation();
  const { favorites } = useSelector(authUserData);
  const isModalOpen = useSelector(isOpen);
  const isNavbarExpanded = useSelector(isNavExpanded)

  useEffect(() => {
    dispatch(fetchMovies(0));
    if (getSid()) {
      dispatch(refreshAuthUser());
    }
  }, []);

  useEffect(() => {
    isModalOpen && dispatch(setModal(false));
    isNavbarExpanded && dispatch(closeNavbar())
  }, [location]);

  useEffect(() => {
    if (getSid()) {
      dispatch(getAllFavorites(favorites));
    }
  }, [favorites]);

  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/favorites"
          element={getSid() ? <FavoriteList /> : <Navigate replace to="/" />}
        />
        <Route
          path="/account"
          element={getSid() ? <Profil /> : <Navigate replace to="/" />}
        />
      </Routes>
      <Footer />
    </Layout>
  );
};

export default App;
