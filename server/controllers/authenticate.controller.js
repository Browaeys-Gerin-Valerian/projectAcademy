//QUERY
import { findUserPerEmail } from "../queries/users.query.js";
//UTILS
import { isEmailValid, isPwdValid } from "../utils/functions.js";
//HTTPS CODES
import { STATUS_CODE } from "../config/status.js";
const { UNAUTHORIZED, INTERNAL_SERVER_ERROR, UNPROCESSABLE_ENTITY } =
  STATUS_CODE;

export const authenticateController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (isPwdValid(password) && isEmailValid(email)) {
      //CHECKING IF USER EXIST
      const user = await findUserPerEmail(email);
      //CHECKING IF PROVIDED PASSWORD MATCH
      if (user) {
        //COMPARE PASSWORD METHOD IS USED ON CURRENT INSTANCE MODEL
        const match = await user.comparePassword(password);
        //IF PROVIDED PASSWORD MATCH
        if (match) {
          // req.login(user);
          // res.send(user).end();
          const token = req.login(user);
          //SEND TOKEN AND LOGGED USER INFORMATION ON LOGIN
          res.send({ user, token }).end();
        } else {
          res.status(UNAUTHORIZED).end();
        }
      } else {
        res.status(UNAUTHORIZED).end();
      }
    } else {
      res.status(UNPROCESSABLE_ENTITY).end();
    }
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).end();
    throw error;
  }
};

export const refreshAuthUserController = async (req, res) => {
  try {
    const { user } = req;
    res.json(user);
  } catch (error) {
    throw error;
  }
};
