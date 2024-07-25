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
// Serve .well-known/nostr.json directly from the root
app.use('/.well-known', express.static(path.join(__dirname, 'public/.well-known')));

// routers
app.use("/", projectRouter);

// fallback for serving main page.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

module.exports = app;