//EXPRESS ROUTER
import express from "express";
const router = express.Router();
//USER CONTROLLER
import {  updateUserController, logoutController } from "../../controllers/user.controller.js";

router.get("/profile/:id");
router.post("/logout", logoutController);
router.put("/updateUser", updateUserController);

export default router;
