import React from "react";
import { Snackbar, Modal } from "../../";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Snackbar timeout={3000} />
      <Modal />
    </div>
  );
};

export default Layout;
