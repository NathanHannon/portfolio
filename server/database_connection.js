// Import Pool directly from 'pg'
const { Pool } = require('pg');
const fs = require('fs');

// const db_ca = fs.readFileSync('./certs/portfolio-db-ca.crt');

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		ca: db_ca,
		rejectUnauthorized: false
	}
});

module.exports = pool;