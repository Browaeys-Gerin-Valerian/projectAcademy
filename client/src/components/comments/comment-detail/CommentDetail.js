import React, { useEffect, useState } from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { authUserData } from "../../../redux/auth/reducer";
import {
  deleteCommentById,
  updateCommentById,
} from "../../../redux/comments/thunks";
//COMPONENTS
import { CustomTextArea } from "../../";
//UTILS
import { isStringEmpty } from "../../../utils/functions";

//REACT ROUTER
import { Link } from "react-router-dom";
//UTILS FUNCTIONS
import { convertUtcToLocalDateString } from "../../../utils/functions";
//ENUMS
import { EDateLocalTimeZone } from "../../../enums/enums";
//ICON
import { CgProfile } from "react-icons/cg";
import { AiFillDelete } from "react-icons/ai";
import {HiPencilAlt} from "react-icons/hi"
import { AiOutlineSend } from "react-icons/ai";

const CommentDetail = ({ comment }) => {
  //REDUX HOOK
  const dispatch = useDispatch();
  const authUser = useSelector(authUserData);
  const { text, userId, updatedAt, createdAt } = comment;
  const { _id, firstname, lastname } = userId;

  const [isEditingComment, setIsEditingComment] = useState(false);
  const [updateCommentValue, setUpdateCommentValue] = useState();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setUpdateCommentValue(text);
  }, [isEditingComment]);

  useEffect(() => {
    setDisabled(isStringEmpty(updateCommentValue));
  }, [updateCommentValue]);

  const reset = () => {
    setDisabled(true);
    setIsEditingComment(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setUpdateCommentValue(value);
  };

  const toogleEditMode = () => {
    setIsEditingComment(!isEditingComment);
  };

  const handleDeleteComment = (commentParam) => {
    const { _id } = commentParam;
    dispatch(deleteCommentById(_id));
  };

  const handleUpdateComment = () => {
    dispatch(updateCommentById(comment._id, updateCommentValue)).then((res) => {
      if (res) {
        reset();
      }
    });
  };

  return (
    <div className="commentDetail">
      <div className="commentDetail__postedDate">
        Posté le:{" "}
        {convertUtcToLocalDateString(createdAt, EDateLocalTimeZone.FR)}
      </div>
      {authUser._id === _id && (
        <div className="commentDetail__userActions">
          <HiPencilAlt onClick={toogleEditMode} />
          {!isEditingComment && (
            <AiFillDelete onClick={() => handleDeleteComment(comment)} />
          )}
        </div>
      )}
      <Link to={`/user/${_id}`}>
        <div className="commentDetail__userProfil">
          <CgProfile />
          Par {firstname} {lastname}
        </div>
      </Link>
      {isEditingComment ? (
        <div className="commentDetail__editingContainer">
          <CustomTextArea value={updateCommentValue} onChange={handleChange} />
          <button
            onClick={handleUpdateComment}
            className={
              disabled
                ? "commentDetail__sendButton commentDetail__disabledSend"
                : "commentDetail__sendButton commentDetail__enableSend"
            }
            disabled={disabled}
          >
            <p>Modifier</p> <AiOutlineSend />
          </button>
        </div>
      ) : (
        <p className="commentDetail__text">{text}</p>
      )}
    </div>
  );
};

export default CommentDetail;
