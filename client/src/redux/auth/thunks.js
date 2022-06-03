import axios from "axios";
//ROUTES
import { AUTHENTICATE } from "../routes/routes";
//SNACKBAR ACTIONS
import { setSnackbar } from "../snackbar/actions";
//ENUMS
import { ESnackbarType, EContext } from "../../enums/enums";
//UTILS FUNCTIONS
import { getSid, setItemFromLocalStorage } from "../../utils/functions";
//REDUX
import { setAuthUser } from "./actions";

export const logAccount =
  ({ email, password, context }) =>
  async (dispatch) => {
    const body = { email, password };

    try {
      const login = await axios.post(AUTHENTICATE.LOGIN, { ...body });
      if (login?.status === 200) {
        const { token, user } = login.data;
        const { firstname } = user;
        setItemFromLocalStorage("sid", token);
        dispatch(setAuthUser(user));
        dispatch(
          setSnackbar({
            open: true,
            message:
              context === EContext.REGISTER
                ? `felicitation ${firstname} votre première connexion est un succés`
                : `Bon retour parmis nous ${firstname}`,
            type: ESnackbarType.INFORMATION,
          })
        );

        return login.data;
      }
    } catch (error) {
      if (context === EContext.REGISTER) {
        dispatch(
          setSnackbar({
            open: true,
            message: "Une erreur est survenue a la connexion",
            type: ESnackbarType.ERROR,
          })
        );
      }
    }
  };

export const refreshAuthUser = () => async (dispatch) => {
  try {
    const refreshUser = await axios.get(AUTHENTICATE.AUTH_USER, {
      headers: { Authorization: getSid() },
    });

    if (refreshUser?.status === 200) {
      const { data } = refreshUser;
      dispatch(setAuthUser(data));
      return refreshUser.data;
    }
  } catch (error) {
    dispatch(
      setSnackbar({
        open: true,
        message: "Une erreur est survenue",
        type: ESnackbarType.ERROR,
      })
    );
  }
};
