const Pool = require('pg/lib').Pool;
const pool = new Pool({
	user: process.env.USERNAME,
	host: process.env.HOSTNAME,
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
	port: process.env.PORT,
	ssl: {
		rejectUnauthorized: true,
		ca: process.env.CA_CERT
	},
})
	.on('connect', () => {
		console.log("Connected to the database")
	})
	.on('error', (err) => {
		console.log('error connecting to database ', err)
	})

module.exports = pool;