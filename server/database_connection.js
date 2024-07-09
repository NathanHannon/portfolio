const { database, user } = require('pg/lib/defaults');

const Pool = require('pg/lib').Pool;
const pool = new Pool({
	// database: process.env.DATABASE_NAME,
	// user: process.env.DATABASE_USER,
	// password: process.env.DATABASE_PASSWORD,
	// host: process.env.DATABASE_HOST,
	// port: process.env.DATABASE_PORT,
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	}
});

module.exports = pool;