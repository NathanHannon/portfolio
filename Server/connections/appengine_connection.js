const connectWithUnixSockets = (config) => {
    const instanceName = "portfolio-285502:us-east1:portfolio-db"
    const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql/portfolio-285502:us-east1:portfolio-db/.s.PGSQL.5432"

    // Establish a connection to the database
    return Knex({
      client: 'pg',
      connection: {
        user: 'postgres',
        password: 'Nhannon03231996!?><',
        database: 'PortfolioDB',
        host: `${dbSocketPath}/${instanceName}`
      },
      // ... Specify additional properties here.
      ...config
    });
  }