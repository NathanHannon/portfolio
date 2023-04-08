const { findSeries } = require('async');

const Pool = require('pg/lib').Pool;
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	}
});

module.exports = pool;