const connectWithUnixSockets = (config) => {
    const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql/portfolio-285502:us-east1:portfolio-db/.s.PGSQL.5432"

   // Establish a connection to the database
  return Knex({
    client: 'pg',
    connection: {
      user: 'postgres', // e.g. 'my-user'
      password: 'Nhannon03231996!?><', // e.g. 'my-user-password'
      database: 'PortfolioDB', // e.g. 'my-database'
      host: `${dbSocketPath}/portfolio-285502:us-east1:portfolio-db`,
    },
    // ... Specify additional properties here.
    ...config
  });
}

  