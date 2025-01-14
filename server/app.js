const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const projectRouter = require("./routes/projects")

// app express object
const app = express();
app.enable('trust proxy');

/// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Security headers
app.use(helmet());
app.use(limiter);

// CORS with environment variables
const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['https://nathanhannon.dev'];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
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
