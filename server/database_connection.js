// Import Pool directly from 'pg'
const { Pool } = require('pg');

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		ca: process.env.DATABASE_CERT,
		rejectUnauthorized: true
	}
});

module.exports = pool;
