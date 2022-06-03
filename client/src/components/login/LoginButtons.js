import React from "react";

const LoginButtons = ({ disabled, handleCloseModal, handleSubmit }) => {
  return (
    <div className="login__buttonContainer">
      <button
        onClick={handleSubmit}
        disabled={disabled}
        className="button__login button__login__submit"
      >
        Connexion
      </button>
      <button
        onClick={handleCloseModal}
        className="button__login button__login__cancel"
      >
        Annuler
      </button>
    </div>
  );
};

export default LoginButtons;
