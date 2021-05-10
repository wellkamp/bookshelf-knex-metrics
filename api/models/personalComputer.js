const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf.model("PersonalComputer", {
  tableName: "personal_computers",
});
