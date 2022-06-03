import axios from "axios";
//ROUTES
import { ONBOARDING } from "../routes/routes";
//SNACKBAR ACTIONS
import { setSnackbar } from "../snackbar/actions";
//ENUMS
import { ESnackbarType } from "../../enums/enums";
//UTIL

export const createAccount = (body) => async (dispatch) => {
  try {
    const newAccount = await axios.post(ONBOARDING.CREATE_ACCOUNT, { ...body });
    if (newAccount?.status === 200) {
      dispatch(
        setSnackbar({
          open: true,
          message: "Votre compte a bien été crée avec succés",
          type: ESnackbarType.SUCCESS,
        })
      );
      return newAccount.data;
    }
  } catch (error) {
    dispatch(
      setSnackbar({
        open: true,
        message: "Cet email existe deja",
        type: ESnackbarType.ERROR,
      })
    );
  }
};
