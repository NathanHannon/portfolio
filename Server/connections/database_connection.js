require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'postgres',
	host: '35.231.19.245',
	database: 'PortfolioDB',
	password: 'Nhannon03231996!?><',
	port: 5432
});


// require('dotenv').config();
// const Pool = require('pg').Pool;
// const pool = new Pool({
// 	user: 'doadmin',
// 	host: 'portfolio-db-do-user-6898555-0.a.db.ondigitalocean.com',
// 	database: 'PortfolioDB',
// 	password: 'u9pypkkxa5w328mv',
// 	port: 25060
// });
module.exports = pool;