const connectWithUnixSockets = (config) => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql/portfolio-285612:us-east1:portfolio-db"

  // Establish a connection to the database
  return Knex({
    client: 'pg',
    connection: {
      user: process.env.CLOUD_SQL_USERNAME, // e.g. 'my-user'
      password: process.env.CLOUD_SQL_PASSWORD, // e.g. 'my-user-password'
      database: process.env.CLOUD_SQL_DATABASE, // e.g. 'my-database'
      host: `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION}`,
    },
    // ... Specify additional properties here.
    ...config
  });
}