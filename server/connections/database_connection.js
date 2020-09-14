const { findSeries } = require('async');

// STANDARD/PLACEHOLDER CONNECTION
require('../../node_modules/dotenv').config();
const Pool = require('../../node_modules/pg').Pool;
const pool = new Pool({
	host: 'app-38233e33-4ba9-4976-9390-3822b3dfa945-do-user-6898555-0.b.db.ondigitalocean.com',
	port: 25060,
	username: 'portfolio-db',
	password: 'lnhu01gmdgj9rtmt',
	database: 'portfolio-db',
	ssl: {
		require,
		ca: '../ssl/do-ca-certificate.crt',
		rejectUnauthorized: false,
	},


	// user: 'postgres',
	// host: '35.185.7.181',
	// database: 'PortfolioDB',
	// password: 'Nhannon03231996!?><',
	// port: 5432
});

module.exports = pool;