// const { Pool } = require('pg');
// const fs = require('fs');
// const path = require('path');

// // Get the certificate content from the environment variable
// const caCertContent = process.env.DATABASE_CERT;

// // Define a writable path in the container for our temp cert file
// const certPath = path.join('/tmp', 'db-ca-cert.crt');

// // Write the certificate content to the temporary file
// fs.writeFileSync(certPath, caCertContent);

// const pool = new Pool({
// 	connectionString: process.env.DATABASE_URL,
// 	ssl: {
// 		// Have the SSL config read the file we just created
// 		ca: fs.readFileSync(certPath).toString(),
// 		rejectUnauthorized: true
// 	}
// });

// module.exports = pool;

// Import Pool directly from 'pg'

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Allow self-signed certs for DigitalOcean managed DB in development
if (process.env.NODE_ENV !== 'production') {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

// Load CA cert: prefer file at certs/portfolio-db-ca-certificate.crt, fall back to env var
const certPath = path.join(__dirname, '../certs/portfolio-db-ca-certificate.crt');
const ca = fs.existsSync(certPath)
	? fs.readFileSync(certPath, 'utf8')
	: process.env.DATABASE_CERT;

// Strip sslmode from connection string to avoid conflicting with ssl object config
const connectionString = (process.env.DATABASE_URL || '').replace(/[?&]sslmode=[^&]*/g, '');

const pool = new Pool({
	connectionString,
	ssl: {
		ca,
		rejectUnauthorized: false
	}
});



module.exports = pool;
