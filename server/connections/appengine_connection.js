const connectWithUnixSockets = (config) => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql/portfolio-285502:us-east1:portfolio-db"

  // Establish a connection to the database
  return Knex({
    client: 'pg',
    connection: {
      user: process.env.SQL_USER, // e.g. 'my-user'
      password: process.env.SQL_PASSWORD, // e.g. 'my-user-password'
      database: process.env.SQL_DATABASE, // e.g. 'my-database'
      host: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`,
    },
    // ... Specify additional properties here.
    ...config
  });
}