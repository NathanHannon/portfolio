const { findSeries } = require('async');

// STANDARD/PLACEHOLDER CONNECTION
require('dotenv/types').config();
const Pool = require('pg/lib').Pool;
const pool = new Pool({
	host: 'app-afd58367-fde3-4647-88a5-0bac6dcd1e6a-do-user-6898555-0.b.db.ondigitalocean.com',
	port: 25060,
	username: 'portfolio-db',
	password: 'kii9exh32ii6in4c',
	database: 'portfolio-db',
	sslmode: 'require'
	// sslmode: {
	// 	require,
	// 	ca: '../ssl/do-ca-certificate.crt',
	// 	rejectUnauthorized: false,
	// },


	// user: 'postgres',
	// host: '35.185.7.181',
	// database: 'PortfolioDB',
	// password: 'Nhannon03231996!?><',
	// port: 5432
});

module.exports = pool;