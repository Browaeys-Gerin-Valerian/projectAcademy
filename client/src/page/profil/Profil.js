import React from "react";
//REDUX
import { useSelector } from "react-redux";
import { authUserData } from "../../redux/auth/reducer";
//ICONS
import { CgProfile } from "react-icons/cg";
//UTILS
import { convertUtcToLocalDateString } from "../../utils/functions";
//ENUMS
import { EDateLocalTimeZone } from "../../enums/enums";

const Profil = () => {
  const { firstname, lastname, email, createdAt } = useSelector(authUserData);
  return (
    <div className="profil">
      <div>
        {" "}
        <CgProfile />
        <div>
          <p>Nom: {firstname}</p>
          <p>Prénom: {lastname}</p>
          <p>Email: {email}</p>
          <p>Compte crée le: {convertUtcToLocalDateString(createdAt, EDateLocalTimeZone.FR)}</p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
