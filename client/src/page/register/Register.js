import React, { useEffect, useState } from "react";
//ROUTER
import { useNavigate } from "react-router-dom";
//UTILS FUNCTIONS
import { isStringEmpty } from "../../utils/functions";
import { REGEX } from "../../utils/regex/regex";
//ENUMS
import { EContext } from "../../enums/enums";
//COMPONENT
import { FormChecker, CustomInput } from "../../components";
//REDUX
import { useDispatch } from "react-redux";
import { createAccount } from "../../redux/onboarding/thunks";
import { setLogged } from "../../redux/auth/actions";
//ICON
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { logAccount } from "../../redux/auth/thunks";
import { setSnackbar } from "../../redux/snackbar/actions";
import { ESnackbarType } from "../../enums/enums";

const Register = () => {
  //ROUTER HOOK
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //INITIAL STATES
  const initialFormState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const initialErroState = {
    firstname: { error: true, message: "" },
    lastname: { error: true, message: "" },
    email: { error: true, message: "" },
    password: { error: true },
  };

  //STATES
  const [registerForm, setRegisterForm] = useState(initialFormState);
  const [registerErrors, setRegisterErrors] = useState(initialErroState);
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [hasChanged, setHasChanged] = useState(false);
  const inputFields = Object.keys(initialFormState).splice(0, 3);

  //USEEFFECT TO DISABLE SUBMIT BUTTON IF FIELDS ARENT VALID
  useEffect(() => {
    //TEST IF EVERY ERROS FIELDS ARE SET TO FALSE
    const fieldsAreValid = Object.values(registerErrors).every(
      (field) => !field.error
    );
    setDisabled(hasChanged && fieldsAreValid ? false : true);
  }, [registerErrors, hasChanged]);

  //TOOGLE PASSWORD VISIBILITY
  const tooglePwdVisibility = () => {
    setShow(!show);
  };

  //RETURN TO PREVIOUS PAGE
  const goBack = () => {
    navigate(-1);
  };

  //FUNCTIONS TO GENERATE ERROR MESSAGE BASED ON DIFFERENTS NAME ATTRIBUTE
  const errorMessage = (name) => {
    switch (name) {
      case "firstname":
        return "Veuillez entrer un Prénom valide";
      case "lastname":
        return "Veuillez entrer un Nom valide";
      case "email":
        return "Veuillez entrer un mail valide";
      default:
        return "";
    }
  };

  //FUNCTIONS TO GENERATE PLACEHOLDERS MESSAGE BASED ON DIFFERENTS INPUTS NAME ATTRIBUTE
  const placeholderMessage = (name) => {
    switch (name) {
      case "firstname":
        return "Votre Nom";
      case "lastname":
        return "Votre Prénom";
      case "email":
        return "Votre Email";
      case "password":
        return "Votre Mot de passe";
      default:
        return "";
    }
  };

  //CHECHER FOR FIRSTNAME AND LASTNAME FIELDS
  const handleCheckField = (name, value) => {
    isStringEmpty(value)
      ? setRegisterErrors({
          ...registerErrors,
          [name]: {
            error: true,
            message: errorMessage(name),
          },
        })
      : setRegisterErrors({
          ...registerErrors,
          [name]: { error: false, message: "" },
        });
  };

  //CHERCKER FOR EMAIL FIELD
  const handleCheckEmail = (name, value) => {
    value.match(REGEX.EMAIL)
      ? setRegisterErrors({
          ...registerErrors,
          [name]: { error: false, message: "" },
        })
      : setRegisterErrors({
          ...registerErrors,
          [name]: { error: true, message: errorMessage(name) },
        });
  };

  //CHECKER FOR PASSWORD FIELD
  const handleCheckPassword = (name, value) => {
    value.match(REGEX.IS_CONTAIN_CAPITAL_LETTER) &&
    value.match(REGEX.IS_CONTAIN_LOWER_LETTER) &&
    value.match(REGEX.IS_CONTAIN_NUMERIC) &&
    value.match(REGEX.IS_CONTAIN_SPECIAL_CHAR) &&
    value.length > 8
      ? setRegisterErrors({ ...registerErrors, [name]: { error: false } })
      : setRegisterErrors({ ...registerErrors, [name]: { error: true } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHasChanged(true);
    setRegisterForm({ ...registerForm, [name]: value });
    switch (name) {
      case "firstname":
        handleCheckField(name, value);
        break;
      case "lastname":
        handleCheckField(name, value);
        break;
      case "email":
        handleCheckEmail(name, value);
        break;
      case "password":
        handleCheckPassword(name, value);
        break;
      default:
        return name;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { ...registerForm };
    const { password, email } = body;
    //API CALL
    dispatch(createAccount(body)).then((createRes) => {
      //IF WE GET A RESPONSE EVERYTHING IS GOOD A WE CAN AUTO LOG USER WITH A SECOND CALL
      if (createRes) {
        dispatch(
          logAccount({ email, password, context: EContext.REGISTER })
        ).then((loginRes) => {
          if (loginRes) {
            dispatch(setLogged());
            navigate("/");
          } else {
            dispatch(setLogged());
            setSnackbar({
              open: true,
              message: "Une erreur est survenue lors de la connexion",
              type: ESnackbarType.ERROR,
            });
          }
        });
      }
    });
  };

  return (
    <div className="register">
      <h1 className="register__title">Inscription</h1>
      <div>
        {inputFields?.map((name, index) => (
          <div className="register__inputContainer" key={index}>
            {" "}
            <CustomInput
              name={name}
              value={registerForm[name]}
              onChange={handleChange}
              className="input__register"
              placeholder={placeholderMessage(name)}
              type={name === "email" ? "email" : "text"}
            />
            {registerErrors[name] && (
              <div className="register__errorField">
                {registerErrors[name].message}
              </div>
            )}
          </div>
        ))}
        <div className="register__inputContainer">
          <CustomInput
            name="password"
            value={registerForm.password}
            onChange={handleChange}
            className="input__register"
            placeholder={placeholderMessage("password")}
            type={show ? "text" : "password"}
          />
          <div className="register__passwordIcon" onClick={tooglePwdVisibility}>
            {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        <FormChecker value={registerForm.password} />
      </div>
      <div className="register__buttonContainer">
        <button
          className="button__register button__register__submit"
          disabled={disabled}
          onClick={handleSubmit}
        >
          S'inscrire
        </button>
        <button
          className="button__register button__register__cancel"
          onClick={goBack}
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default Register;
