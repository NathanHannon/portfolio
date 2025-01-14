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
app.use(express.static(path.join(__dirname, "../build")));
app.get('/.well-known/nostr.json', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/.well-known/nostr.json'));
});

// routers
app.use("/", projectRouter);

// fallback for serving main page.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

module.exports = app;
