//EXPRESS ROUTER
import express from "express";
const router = express.Router();
//COMMENTS CONTROLLERS
import {
  getCommentDetailController,
  getMovieCommentsController,
  getUserCommentsController,
  createCommentController,
  deleteCommentController,
  updateCommentController,
} from "../../controllers/comment.controller.js";

router.get("/:id", getCommentDetailController);
router.get("/movie/comments/:id", getMovieCommentsController);
router.get("/user/comments/:id", getUserCommentsController);
router.post("/create", createCommentController);
router.post("/delete", deleteCommentController);
router.put("/update", updateCommentController);

export default router;
