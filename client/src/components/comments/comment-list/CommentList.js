import React from "react";
//COMPONENTS
import { CommentDetail } from "../../";
//UTILS
import { isArrayEmpty } from "../../../utils/functions";
import AddComment from "../comment-add/AddComment";

const CommentList = ({ comments, movieId }) => {
  return (
    <div className="commentList">
      {isArrayEmpty(comments) ? (
        <div>
          <h1>Pas encore de commentaire</h1>
          <AddComment movieId={movieId} />
        </div>
      ) : (
        <>
          {" "}
          <h1>Commentaires:</h1>
          <AddComment movieId={movieId} />
          {comments?.map((comment, index) => (
            <React.Fragment key={index}>
              <CommentDetail comment={comment} />
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default CommentList;
