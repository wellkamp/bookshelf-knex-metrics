const dbknex = require("../config/db");
const bookshelf = require("bookshelf")(dbknex);
const PersonalComputer = require("./PersonalComputer");

module.exports = bookshelf.model("User", {
  tableName: "users",
  computers() {
    return this.hasMany(PersonalComputer);
  },
});
