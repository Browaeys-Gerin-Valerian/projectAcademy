import React from "react";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../../redux/modal/actions";
import { isOpen, modaltype } from "../../../redux/modal/reducer";
//COMPONENTS
import { Login } from "../../../components";
//ENUMS
import { EModalType } from "../../../enums/enums";
//COMPONENTS
import DeleteFavorites from "../../favorites/DeleteFavorites";

const Modal = () => {
  const dispatch = useDispatch();
  const open = useSelector(isOpen);
  const modal = useSelector(modaltype);

  const handleCloseModal = () => {
    dispatch(setModal(false));
  };

  window.onclick = (e) => {
    const { className } = e.target;
    if (className === "modal modal__open") dispatch(setModal(false));
  };
  return (
    <div className={open ? "modal modal__open" : "modal modal__close"}>
      <div className="modal__content">
        <span className="modal__closeIcon" onClick={handleCloseModal}>
          &times;
        </span>

        <div className="modal__body">
          {modal === EModalType.LOGIN && <Login />}
          {modal === EModalType.DELETE_FAVORITES && <DeleteFavorites />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
