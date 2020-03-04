module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      filename: process.env.DATABASE_URL,
      // filename: './database/rest.db3',
    },
    pool: {
      min:2,
      max:10
      // afterCreate: (conn, done) => {
      //   conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  }