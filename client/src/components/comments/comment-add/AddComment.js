import React, { useEffect, useState } from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../../redux/comments/thunks";
import { authUserData } from "../../../redux/auth/reducer";

//ICONS
import { AiOutlineSend } from "react-icons/ai";
//UTILS
import { isStringEmpty } from "../../../utils/functions";
import { addComment } from "../../../redux/comments/actions";
import CustomTextArea from "../../form/input/CustomTextArea";

const AddComment = ({ movieId }) => {
  //REDUX HOOK
  const dispatch = useDispatch();
  const authUser = useSelector(authUserData);

  //STATE
  const [newComment, setNewComment] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(isStringEmpty(newComment));
  }, [newComment]);

  const handleChange = (e) => {
    const { value } = e.target;
    setNewComment(value);
  };

  const handleCreateNewComment = () => {
    dispatch(createComment(authUser._id, movieId, newComment)).then((res) => {
      setNewComment("");
      if (res) {
        dispatch(addComment(res));
      }
    });
  };
  return (
    <div className="addComment">
      <CustomTextArea
        placeholder="Saisissez votre commentaire..."
        onChange={handleChange}
        value={newComment}
      />
      <button
        className={
          disabled
            ? "addComment__sendButton addComment__disabledSend"
            : "addComment__sendButton addComment__enableSend"
        }
        onClick={handleCreateNewComment}
        disabled={disabled}
      >
        <p>Poster</p>
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default AddComment;
