// [START gae_flex_postgres_app]
const express = require('../node_modules/express');
const path = require('path');
const cookieParser = require('../node_modules/cookie-parser');
const logger = require('../node_modules/morgan');
const app = express();
app.enable('trust proxy');

//---------------Routers-----------------
var projectRouter = require("./routes/projects")

//use required packages
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"), {
    maxAge: 15768000
}));
// app.listen(3000);

//use create route api
app.use("/", projectRouter);

module.exports = app;
