// UNIX SOCKET CONNECTION
const connectWithUnixSockets = (config) => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql/portfolio-285801:us-east1:portfolio-db/.s.PGSQL.5432"

  // Establish a connection to the database
  return Knex({
    client: 'pg',
    connection: {
      user: process.env.production.PGUSER, // e.g. 'my-user'
      password: process.env.production.PGPASSWORD, // e.g. 'my-user-password'
      database: process.env.production.PGDATABASE, // e.g. 'my-database'
      host: process.env.production.PGHOST,
    },
    // ... Specify additional properties here.
    ...config
  });
}