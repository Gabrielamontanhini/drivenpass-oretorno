import express, { json } from "express";
import "express-async-errors";


import dotenv from "dotenv";
import { handleApplicationErrors } from "./middlewares";
import router from "./routes/index-routes";

dotenv.config();

const app = express();
app
    .use(json())
    .use(router)
    .use(handleApplicationErrors);

export default app;