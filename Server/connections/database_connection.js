require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'postgres',
	host: '34.73.186.70',
	database: 'PortfolioDB',
	password: 'Nhannon03231996!?><',
	port: 5432
});

module.exports = pool;