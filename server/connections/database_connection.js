const { findSeries } = require('async');

// STANDARD/PLACEHOLDER CONNECTION
require('../../node_modules/dotenv').config();
const Pool = require('../../node_modules/pg').Pool;
const pool = new Pool({
	user: 'doadmin',
	password: 'lkon3ablk9qtndmv',
	host: 'portfolio-cluster-do-user-6898555-0.a.db.ondigitalocean.com',
	port: 25060,
	database: 'PortfolioDB',
	ssl: {
		require,
		ca: '../ssl/do-ca-certificate.crt',
		rejectUnauthorized: false,
	} 
	
	
	// user: 'postgres',
	// host: '35.185.7.181',
	// database: 'PortfolioDB',
	// password: 'Nhannon03231996!?><',
	// port: 5432
});

module.exports = pool;