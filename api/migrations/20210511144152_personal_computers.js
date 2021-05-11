exports.up = function (knex) {
  return knex.schema.createTable("personal_computers", (table) => {
    table.increments("id").primary();
    table.string("mainboard", 150).notNullable();
    table.integer("user_id").unique().unsigned();
    table.foreign("user_id").references("users.id");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
