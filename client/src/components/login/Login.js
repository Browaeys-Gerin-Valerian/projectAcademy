import React, { useState, useEffect } from "react";
//ROUTER
import { Link } from "react-router-dom";
//COMPONENTS
import { CustomInput } from "../";
//UTILS FUNCTIONS
import { isStringHaveLength } from "../../utils/functions";
//ENUMS
import { EContext } from "../../enums/enums";
//ICONS
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoginButtons from "./LoginButtons";
//REDUX
import { useDispatch } from "react-redux";
import { setModal } from "../../redux/modal/actions";
import { logAccount } from "../../redux/auth/thunks";
import { setLogged } from "../../redux/auth/actions";

const Login = () => {
  const dispatch = useDispatch();

  const initialStateLogin = {
    email: "",
    password: "",
  };
  const [show, setShow] = useState(false);
  const [loginForm, setLoginForm] = useState(initialStateLogin);
  const [disabled, setDisabled] = useState(true);
  const [loginError, setLoginError] = useState("");

  //SET THE SUBMIT BUTTON DISABLE ATTRIBUTE
  useEffect(() => {
    if (
      isStringHaveLength(loginForm.email) &&
      isStringHaveLength(loginForm.password)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [loginForm]);

  const handleCloseModal = () => {
    dispatch(setModal(false));
    setLoginForm(initialStateLogin);
  };

  const handleRedirect = () => {
    handleCloseModal();
    setLoginError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { ...loginForm };
    const { password, email } = body;
    dispatch(logAccount({ email, password, context: EContext.LOGIN })).then(
      (loginRes) => {
        if (loginRes) {
          dispatch(setLogged());
          dispatch(setModal(false));
          setLoginError("");
          setLoginForm(initialStateLogin);
        } else {
          dispatch(setLogged());
          setLoginError("Identifiant ou mot de passe erroné");
        }
      }
    );
  };

  //TOOGLE PASSWORD VISIBILITY
  const tooglePwdVisibility = () => {
    setShow(!show);
  };
  return (
    <div className="login">
      <div className="login__inputContainer">
        <CustomInput
          name="email"
          value={loginForm.email}
          onChange={handleChange}
          className="input__login"
          placeholder="Email"
        />
        <CustomInput
          name="password"
          value={loginForm.password}
          onChange={handleChange}
          className="input__login"
          placeholder="Mot de passe"
          type={show ? "text" : "password"}
        />
        <div className="login__passwordIcon" onClick={tooglePwdVisibility}>
          {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </div>
        <div className="login__error">{loginError}</div>
      </div>
      <div onClick={handleRedirect} className="login_alreadyAnAccount">
        <Link to="/register">Deja un compte?</Link>
      </div>
      <LoginButtons
        disabled={disabled}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
