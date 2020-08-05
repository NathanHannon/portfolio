const connectWithUnixSockets = (config) => {
    const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql/portfolio-285502:us-east1:portfolio-db/.s.PGSQL.5432"

   // Establish a connection to the database
  return Knex({
    client: 'pg',
    connection: {
      user: process.env.DB_USER, // e.g. 'my-user'
      password: process.env.DB_PASS, // e.g. 'my-user-password'
      database: process.env.DB_NAME, // e.g. 'my-database'
      host: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`,
    },
    // ... Specify additional properties here.
    ...config
  });
}

  