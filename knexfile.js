// Update with your config settings.

module.exports = {
  client: "mysql2",
  connection: {
    database: "bookshelf_metrics",
    user: "username",
    password: "wellkamp",
    filename: "./dev.sqlite3",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
