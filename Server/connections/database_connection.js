require('../../node_modules/dotenv').config();
const Pool = require('../../node_modules/pg').Pool;
const pool = new Pool({
	user: 'postgres',
	host: '35.229.62.112',
	database: 'PortfolioDB',
	password: 'Nhannon03231996!?><',
	port: 5432
});

module.exports = pool;