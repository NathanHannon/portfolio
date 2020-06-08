require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'postgres',
	host: '35.231.19.245',
	database: 'portfolio-db',
	password: 'Nhannon3231996!?><',
	port: 5432
});

module.exports = pool;