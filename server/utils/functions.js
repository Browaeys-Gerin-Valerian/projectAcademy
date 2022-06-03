import { REGEX } from "./regex.js";
const {
  EMAIL,
  IS_CONTAIN_NUMERIC,
  IS_CONTAIN_CAPITAL_LETTER,
  IS_CONTAIN_LOWER_LETTER,
  IS_CONTAIN_SPECIAL_CHAR,
} = REGEX;

export const decodeBase64 = (buffer) => {
  return Buffer.from(buffer, "base64").toString();
};

export const isStringEmpty = (str = "") => {
  return str.trim().length === 0;
};

export const isStringNotEmpty = (str = "") => {
  return str.trim().length !== 0;
};

export const isPwdValid = (pwd = "") => {
  return pwd.match(IS_CONTAIN_CAPITAL_LETTER) &&
    pwd.match(IS_CONTAIN_LOWER_LETTER) &&
    pwd.match(IS_CONTAIN_NUMERIC) &&
    pwd.match(IS_CONTAIN_SPECIAL_CHAR) &&
    pwd.length > 8
    ? true
    : false;
};

export const isEmailValid = (email = "") => {
  return email.match(EMAIL) ? true : false;
};
