//EXPRESS ROUTER
import express from "express";
const router = express.Router();
//ROUTERS
import {
  searchRouter,
  usersRouter,
  commentsRouter,
  favoritesRouter,
} from "./index.js";
//CONTROLLER
import { refreshAuthUserController } from "../../controllers/authenticate.controller.js";

router.use("/refreshAuthUser", refreshAuthUserController);
router.use("/comments", commentsRouter);
router.use("/favorites", favoritesRouter);
router.use("/users", usersRouter);
router.use("/search", searchRouter);

export default router;
