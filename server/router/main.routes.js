//EXPRESS ROUTER
import express from "express";
const router = express.Router();
//ROUTERS
import {
  moviesRouter,
  authenticateRouter,
  privateRouter,
  onboardingController
} from "./routers/index.js";
//AUTH MIDDLEWARE
import { isAuthenticated } from "../middlewares/authentication.middleware.js";

router.use("/authenticate", authenticateRouter);
router.use("/onboarding", onboardingController)
router.use("/movies", moviesRouter);
router.use("/private", isAuthenticated, privateRouter);

export { router };
