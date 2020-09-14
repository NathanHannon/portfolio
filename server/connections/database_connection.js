const { findSeries } = require('async');

// STANDARD/PLACEHOLDER CONNECTION
require('../../node_modules/dotenv').config();
const Pool = require('../../node_modules/pg').Pool;
const pool = new Pool({
	host: 'app-9d250f68-6db5-40aa-bdd7-e8ecbab9cf39-do-user-6898555-0.b.db.ondigitalocean.com',
	port: 25060,
	username: 'portfolio-db',
	password: 'f369r23mf90kk3hz',
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