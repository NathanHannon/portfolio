const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const projectRouter = require('./routes/projects');

const app = express();
const isProd = process.env.NODE_ENV === 'production';
app.set('trust proxy', 1);

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    validate: { trustProxy: false } // skip trust proxy validation for local dev
});

// Security headers (allow Google Fonts and external project screenshots)
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
            fontSrc: ["'self'", 'https://fonts.gstatic.com'],
            imgSrc: ["'self'", 'data:', 'https:'],
            connectSrc: ["'self'", 'https://nathanhannon.dev'],
            frameAncestors: ["'none'"],
        },
    },
}));
app.use(limiter);

/**
 * Validates if the given origin matches any of the predefined valid domain patterns.
 *
 * @param {string} origin - The origin URL to be validated.
 * @returns {boolean} - Returns true if the origin matches any of the valid domain patterns, otherwise false.
 */
const validateDomain = (origin) => {
    const validDomains = [
        /^https:\/\/(portfolio\.|[\w-]+\.)?nathanhannon\.(dev|xyz|com)$/
    ];
    if (!isProd) {
        validDomains.push(/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/);
    }
    return validDomains.some(pattern => pattern.test(origin));
};

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || validateDomain(origin)) {
            callback(null, true);
        } else {
            const err = new Error('Not allowed by CORS');
            err.status = 403;
            callback(err);
        }
    },
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(logger(isProd ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const buildDir = path.join(__dirname, '../build');
app.use(express.static(buildDir));
app.get('/.well-known/nostr.json', (req, res) => {
    res.sendFile(path.join(buildDir, '.well-known/nostr.json'));
});

// API routers
app.use('/api', projectRouter);
app.use('/api', (req, res) => {
    res.status(404).json({ error: 'API endpoint not found' });
});

// SPA fallback for client-side routes
app.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    if (status >= 500) {
        console.error(err);
    }
    res.status(status).json({
        error: status === 403 ? err.message : 'Internal server error',
    });
});

module.exports = app;
