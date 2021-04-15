const Pool = require('pg/lib').Pool;

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		// Reject unauthorized connections
		rejectUnauthorized: false,
	}
})
	.on('connect', () => {
		console.log("Connected to the database")
	})
	.on('error', (err) => {
		console.log('error connecting to database ', err)
	});

module.exports = pool;