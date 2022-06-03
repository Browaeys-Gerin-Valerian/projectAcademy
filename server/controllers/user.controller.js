import {
  findUserPerEmail,
  createdNewUser,
  updateUser,
} from "../queries/users.query.js";
//HTTP STATUS
import { STATUS_CODE } from "../config/status.js";
const { CONFLICT, OK, UNPROCESSABLE_ENTITY } = STATUS_CODE;
//UTILS
import {
  isStringNotEmpty,
  isPwdValid,
  isEmailValid,
} from "../utils/functions.js";

export const createAccountController = async (req, res) => {
  try {
    const { body } = req;
    const { firstname, lastname, password, email } = body;

    //CHECKING FIRST IF EVERY FIELD IS VALID
    if (
      isStringNotEmpty(firstname) &&
      isStringNotEmpty(lastname) &&
      isPwdValid(password) &&
      isEmailValid(email)
    ) {
      const emailAlreadyExist = await findUserPerEmail(email);

      // IF EMAIL ALREADY EXIST WE CAN T CREATE ACCOUNT USER IS ALREADY REGISTER
      if (emailAlreadyExist) {
        res.status(CONFLICT).end();
      } else {
        const newUser = await createdNewUser(body);
        const returnedNewUser = {...newUser}
        delete returnedNewUser._doc.password
        res.json(returnedNewUser._doc);
      }
    } else {
      res.status(UNPROCESSABLE_ENTITY).end();
    }
  } catch (error) {
    throw error;
  }
};

export const updateUserController = async (req, res) => {
  try {
    const {
      body,
      user: { _id },
    } = req;
    const updatedUser = await updateUser(_id, body);
    res.json(updatedUser);
  } catch (error) {
    throw error;
  }
};

export const logoutController = async (req, res) => {
  try {
    const { logout } = req;
    logout();
    res.status(OK);
  } catch (error) {
    throw error;
  }
};
