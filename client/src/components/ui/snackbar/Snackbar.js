import React, { useEffect } from "react";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { snackbar } from "../../../redux/snackbar/reducer";
import { setSnackbar } from "../../../redux/snackbar/actions";


const Snackbar = ({ timeout }) => {
  const dispatch = useDispatch();

  const { open, message, type } = useSelector(snackbar);

  let TIMER;
  const handleTimeout = () => {
    TIMER = setTimeout(() => {
      dispatch(setSnackbar({ open: false, message: "", type: null }));
    }, timeout);
  };

  const handleClose = () => {
    clearTimeout(TIMER);
    dispatch(setSnackbar({ open: false, message: "", type: null }));
  };

  useEffect(() => {
    if (open) {
      handleTimeout();
    }
    return () => {
      clearTimeout(TIMER);
    };
  }, [open, TIMER]);

  return (
    open && (
      <div className={`snackbar snackbar--${type}`}>
        <p className="snackbar__message">{message}</p>
        <button className="button__snackbar" onClick={handleClose}>
        &times;
        </button>
      </div>
    )
  );
};

export default Snackbar;
