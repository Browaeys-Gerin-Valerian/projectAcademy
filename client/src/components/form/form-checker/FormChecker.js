import React from "react";
//UTILS REGEX
import { REGEX } from "../../../utils/regex/regex";

const FormChecker = ({ value }) => {
  return (
    <div className="formChecker">
      Doit contenir au moins{" "}
      <span
        className={
          value.match(REGEX.IS_CONTAIN_CAPITAL_LETTER)
            ? `formChecker__valid`
            : `formChecker__error`
        }
      >
        une majuscule
      </span>
      , {" "}
      <span
        className={
          value.match(REGEX.IS_CONTAIN_LOWER_LETTER)
            ? `formChecker__valid`
            : `formChecker__error`
        }
      >
        une minuscule
      </span>
      , {" "}
      <span
        className={
          value.match(REGEX.IS_CONTAIN_NUMERIC)
            ? `formChecker__valid`
            : `formChecker__error`
        }
      >
        un chiffre
      </span>
      , {" "}
      <span
        className={
          value.match(REGEX.IS_CONTAIN_SPECIAL_CHAR)
            ? `formChecker__valid`
            : `formChecker__error`
        }
      >
        un caractère spécial
      </span>{" "}
      et{" "}
      <span
        className={
          value.length > 8 ? `formChecker__valid` : `formChecker__error`
        }
      >
        comporter plus de 8 caractères
      </span>{" "}
    </div>
  );
};

export default FormChecker;
