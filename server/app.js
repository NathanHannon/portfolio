// [START gae_flex_postgres_app]
import express, { json, urlencoded, static } from '../node_modules/express';
import { join } from 'path';
import cookieParser from '../node_modules/cookie-parser';
import logger from '../node_modules/morgan';

const app = express();
app.enable('trust proxy');

//---------------Routers-----------------
import projectRouter from "./routes/projects";

//use required packages
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(static(join(__dirname, "public")));
// app.listen(3000);

//use create route api
app.use("/", projectRouter);

export default app;
