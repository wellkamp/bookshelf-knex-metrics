const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "pass",
    database: "bookshelf_metrics",
    charset: "utf8",
  },
});

module.exports.knex = knex;
