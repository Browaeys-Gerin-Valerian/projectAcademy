//EXPRESS ROUTER
import express from "express";
const router = express.Router();
//SEARCH CONTROLLERS
import { searchController } from "../../controllers/search.controllers.js";

router.get("/movies", searchController);

export default router;
