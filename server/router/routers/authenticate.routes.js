//EXPRESS ROUTER
import express from "express";
const router = express.Router();
//MOVIES CONTROLLERS
import { authenticateController } from "../../controllers/authenticate.controller.js";

router.post("/", authenticateController);

export default router;
