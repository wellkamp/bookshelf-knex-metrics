const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf.model("User", {
  tableName: "users",
});
