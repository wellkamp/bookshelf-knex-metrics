const dbknex = require("../config/db");
const bookshelf = require("bookshelf")(dbknex);
const User = require("./User");

module.exports = bookshelf.model("PersonalComputer", {
  tableName: "personal_computers",
  user() {
    return this.belongsTo(User);
  },
});
