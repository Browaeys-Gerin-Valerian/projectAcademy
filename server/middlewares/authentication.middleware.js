//JWT LIB
import jwt from "jsonwebtoken";
const { verify } = jwt;
//SECRET KEY
import { CONFIG } from "../config/config.js";
const { SECRET_KEY, WEBAPP_SID } = CONFIG;
//HTTPS CODES
import { STATUS_CODE } from "../config/status.js";
const { UNAUTHORIZED } = STATUS_CODE;
//UTILS FUNCTION TO CREATE TOKEN
import { createToken } from "../utils/jwt.utils.js";
//QUERY
import { findUserPerId } from "../queries/users.query.js";

export const extractUserFromToken = async (req, res, next) => {
  const { cookies } = req;
  const { authorization } = req.headers;

  //CHECKING IF TOKEN KEY SID IS PRESENT ON COOKIES
  // if (cookies.sid) {
    if(authorization){
    try {
      //DECODING JWT
      // const decodedToken = verify(cookies.sid, SECRET_KEY);
      const decodedToken = verify(authorization, SECRET_KEY);

      //TRYING TO FIND THE USER WITH THE PAYLOAD KEY IN DECODED TOKEN WHO STORE A USER ID
      const user = await findUserPerId(decodedToken.payload);
      if (user) {
       const userWithoutPwd = {...user}
       delete userWithoutPwd._doc.password
        //CREATE A USER KEY THE LOGGED USER INFORMATIONS ON REQ OBJECT
        req.user = userWithoutPwd._doc;
        next();
      } else {
        // res.clearCookie(WEBAPP_SID);
        next();
      }
    } catch (error) {
      res.status(UNAUTHORIZED).end();
      throw error;
    }
  } else {
    // res.clearCookie(WEBAPP_SID);
    next();
  }
};

//HELPERS
export const authenticateHelpers = (req, res, next) => {
  // req.logout = () => res.clearCookie(WEBAPP_SID);
  
  //CREATE LOGIN METHOD ON REQ OBJECT
  req.login = (user) => {
    const token = createToken(user._id);
    return token
    // res.cookie(WEBAPP_SID, token);
  };
  next();
};

export const isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(UNAUTHORIZED).end();
  }
};
