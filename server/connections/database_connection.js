// STANDARD/PLACEHOLDER CONNECTION
require('../../node_modules/dotenv').config();
const Pool = require('../../node_modules/pg').Pool;
const pool = new Pool({
	user: 'postgres',
	host: '35.185.7.181',
	database: 'PortfolioDB',
	password: 'Nhannon03231996!?><',
	port: 5432
});

module.exports = pool;