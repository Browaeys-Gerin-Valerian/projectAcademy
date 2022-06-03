import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_NETFILM_API;

export const AUTHENTICATE = {
  LOGIN: "/authenticate/",
  LOGOUT: "/private/users/logout",
  AUTH_USER: "/private/refreshAuthUser"
};

export const ONBOARDING = {
  CREATE_ACCOUNT: "/onboarding/createAccount",
};

export const MOVIES = {
  ALL_MOVIES: "/movies/all",
  MOVIE_DETAIL: "/movies/", //PARAM ID AT THE END (/movies/${movie_id})
};

export const COMMENTS = {
  CREATE_COMMENT: "/private/comments/create",
  DELETE_COMMENT: "/private/comments/delete",
  UPDATE_COMMENT: "/private/comments/update",
  USER_COMMENTS: "/private/comments/user/comments/", //PARAM ID AT THE END (/private/user/comment/${user_id})
  MOVIE_COMMENTS: "/private/comments/movie/comments/", //PARAM ID AT THE END (/private/movie/comment/${movie_id})
  COMMENT_DETAIL: "/private/comments/", //PARAM ID AT THE END (/private/comments/${comment_id})
};

export const FAVORITES = {
  ALL_FAVORITES: "/private/favorites/all",
  ADD_FAVORITE: "/private/favorites/add",
  DELETE_FAVORITES: "/private/favorites/delete",
};

export const USER = {
  PROFILE: "/private/users/profile/", //PARAM ID AT THE END (/private/users/profile/${user_id})
  UPDATE_PROFILE: "/private/users/updateUser",
};
