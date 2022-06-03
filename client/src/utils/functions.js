export const convertUtcToLocalDateString = (date, local) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(local, { options });
};

export const isForAdult = (adultContent) =>
  adultContent ? "Interdit aux mineurs" : "Tout public";

export const isMovieHasVotes = (voteAverage, voteCount) =>
  voteCount !== 0
    ? `${voteAverage} sur ${voteCount} avis`
    : "Soyez le premier a donner votre avis";

export const isStringEmpty = (str) => {
  return str?.trim().length === 0;
};

export const isStringHaveLength = (str) => {
  return str?.trim().length > 0;
};

export const isArrayEmpty = (arr = []) => {
  return arr?.length === 0;
};

export const arrayLength = (arr = []) => {
  return arr.length;
};

export const encodePassword = (pwd) => {
  return window.btoa(pwd);
};

export const getItemFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const setItemFromLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};
export const removeItemFromLocalStorage = (key) => {
  return localStorage.removeItem(key);
};

export const getSid = () => {
  return getItemFromLocalStorage("sid");
};
