const { findSeries } = require('async');

// STANDARD/PLACEHOLDER CONNECTION
const Pool = require('pg/lib').Pool;
const pool = new Pool({
	host: 'app-afd58367-fde3-4647-88a5-0bac6dcd1e6a-do-user-6898555-0.b.db.ondigitalocean.com',
	port: 25060,
	username: 'portfolio-db',
	password: 'kii9exh32ii6in4c',
	database: 'portfolio-db',
	ssl: true
});

module.exports = pool;