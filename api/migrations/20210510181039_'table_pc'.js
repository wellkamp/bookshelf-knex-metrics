exports.up = function (knex) {
  return knex.schema.createTable("personal_computers", (table) => {
    table.increments("id").primary();
    table.string("mainboard", 150).notNullable();
  });
};

exports.down = function (knex) {};
