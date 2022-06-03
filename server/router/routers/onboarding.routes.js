//EXPRESS ROUTER
import express from "express";
const router = express.Router();
//USER CONTROLLER
import { createAccountController } from "../../controllers/user.controller.js";

router.post("/createAccount", createAccountController);

export default router;
