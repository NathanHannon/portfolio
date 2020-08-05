const connectWithUnixSockets = (config) => {
    const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql"
  
    // Establish a connection to the database
    return Knex({
      client: 'pg',
      connection: {
        user: 'postgres',
        host: '34.73.186.70',
        database: 'PortfolioDB',
        password: 'Nhannon03231996!?><',
        port: 5432
      },
      // ... Specify additional properties here.
      ...config
    });
  }