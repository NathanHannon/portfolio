// Import Pool directly from 'pg'
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Load CA cert: prefer file at certs/portfolio-db-ca-certificate.crt, fall back to env var
const certPath = path.join(__dirname, '../certs/portfolio-db-ca-certificate.crt');
const ca = fs.existsSync(certPath)
	? fs.readFileSync(certPath, 'utf8')
	: process.env.DATABASE_CERT;

// Strip sslmode from connection string to avoid conflicting with ssl object config
const connectionString = (process.env.DATABASE_URL || '').replace(/[?&]sslmode=[^&]*/g, '');

const ssl = ca
	? { ca, rejectUnauthorized: true }
	: process.env.NODE_ENV === 'production'
		? { rejectUnauthorized: true }
		: { rejectUnauthorized: false };

const pool = new Pool({
	connectionString,
	ssl
});

pool.on('error', (err) => {
	console.error('Unexpected PostgreSQL pool error:', err);
});

module.exports = pool;