const express = require('express');
const path = require('path');
const logger = require('morgan');

const projectRouter = require("./routes/projects")

// app express object
const app = express();
app.enable('trust proxy');

// use required packages
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routers
app.use("/", projectRouter);

module.exports = app;