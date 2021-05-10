const dbknex = require("../config/db");
const bookshelf = require("bookshelf")(dbknex);

module.exports = bookshelf.model("User", {
  tableName: "users",
});
