import express from 'express';
import path from 'path';
import logger from 'morgan';

import projectRouter from './routes/projects';

// app express object
const app = express();
app.enable('trust proxy');

// use required packages
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

// routers
app.use("/", projectRouter);

// indicate that the app is listening on port 3000
app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
module.exports = app;