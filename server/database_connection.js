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

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		ca: process.env.DATABASE_CERT,
		rejectUnauthorized: true
	}
});



module.exports = pool;
