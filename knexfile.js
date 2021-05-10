// Update with your config settings.

module.exports = {
  client: "mysql2",
  connection: {
    database: "bookshelf_metrics",
    user: "root",
    password: "pass",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
