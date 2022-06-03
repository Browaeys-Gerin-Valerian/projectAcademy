import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { movieSlice } from "./movies/reducer";
import { userSlice } from "./user/reducer";
import { snackbarSlice } from "./snackbar/reducer";
import { modalSlice } from "./modal/reducer";
import { commentSlice } from "./comments/reducer";
import { authSlice } from "./auth/reducer";
import { favoriteSlice } from "./favorites/reducer";
import { navbarSlice } from "./navbar/reducer";

const reducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  movie: movieSlice.reducer,
  favorite: favoriteSlice.reducer,
  comment: commentSlice.reducer,
  snackbar: snackbarSlice.reducer,
  modal: modalSlice.reducer,
  navbar: navbarSlice.reducer,
});

export default configureStore({
  reducer,
});
