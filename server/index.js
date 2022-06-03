//ENV MODULE
import "dotenv/config";
//DATABASE CONNECTION INSTANCE
import "./database/db.connect.js";
//EXPRSS IMPORT
import express from "express";
//EXPRESS INSTANCE
const app = express();
//COOKIE PARSER
import pkgCookie from "cookie-parser";
import pkgcors from "cors";
import {
  extractUserFromToken,
  authenticateHelpers,
} from "./middlewares/authentication.middleware.js";
//EXPRESS MAIN ROUTER
import { router } from "./router/main.routes.js";

//ENV VARIABLES
import { CONFIG } from "./config/config.js";
const { HOST, PORT } = CONFIG;

//MAIN MIDDLEWARES
app.use(pkgCookie());
app.use(pkgcors());
app.use(extractUserFromToken);
app.use(authenticateHelpers);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on http://${HOST}:${PORT}`);
});
