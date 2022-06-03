//EXPRESS ROUTER
import express from "express";
const router = express.Router();
//MOVIES CONTROLLERS
import {
  getMoviesController,
  getMovieDetailController,
} from "../../controllers/movie.controller.js";

router.get("/all", getMoviesController);
router.get("/:id", getMovieDetailController);




export default router;
