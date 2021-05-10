const User = require("../models/User");

class UserController {
  static async index(ctx) {
    try {
      const users = await new User().fetchAll();
      ctx.body = users;
    } catch (err) {
      ctx.throw(500, err);
    }
  }

  static async create(ctx) {
    try {
      let { first_name, last_name, email, password_hash } = ctx.request.body;

      const user = await User.forge({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password_hash: password_hash,
      }).save();

      ctx.body = user;
    } catch (err) {
      ctx.throw(500, err);
    }
  }
}

module.exports = UserController;
