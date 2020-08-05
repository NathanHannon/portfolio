var createError = require('./node_modules/http-errors');
var express = require('./node_modules/express');
var path = require('path');
var cookieParser = require('./node_modules/cookie-parser');
var logger = require('./node_modules/morgan');
var cors = require("./node_modules/cors");

//---------------Routers-----------------
var projectRouter = require("./routes/projects")

var app = express();

//use required packages
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//use create route api
app.use("/", projectRouter);

module.exports = app;
