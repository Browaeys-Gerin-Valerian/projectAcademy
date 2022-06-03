//EXPRESS ROUTER
import express from "express";
const router = express.Router();
//COMMENTS CONTROLLERS
import {
  getFavoritesController,
  addNewFavoritesController,
  deleteFavoritesController,
} from "../../controllers/favorite.controller.js";

router.post("/all", getFavoritesController);
router.post("/add", addNewFavoritesController);
router.put("/delete", deleteFavoritesController);

export default router;
