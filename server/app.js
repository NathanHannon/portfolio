const express = require('express');
const path = require('path');
const logger = require('morgan');
const projectRouter = require("./routes/projects")
const app = express();
app.enable('trust proxy');

// Logging middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve .well-known BEFORE other routes
app.get('/.well-known/nostr.json', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/.well-known/nostr.json'));
});

// Static files middleware
app.use(express.static(path.join(__dirname, '../build')));

// API routes
app.use("/", projectRouter);

// Catchall MUST be last
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = app;