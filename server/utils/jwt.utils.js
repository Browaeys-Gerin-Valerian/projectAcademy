//JWT LIB
import jwt from "jsonwebtoken";
const { sign } = jwt;
//SECRET KEY
import { CONFIG } from "../config/config.js";
const { SECRET_KEY } = CONFIG;

export const createToken = (userId) => {
  const token = sign({ payload: userId }, SECRET_KEY);
  return token;
};
