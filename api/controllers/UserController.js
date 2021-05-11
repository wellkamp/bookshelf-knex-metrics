const User = require("../models/User");
const koaBody = require("koa-body");

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
    let { first_name, last_name, email, password_hash } = ctx.request.body;
    console.log(ctx.request.body);
    try {
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

  static async show(ctx) {
    let { id } = ctx.params;
    try {
      await User.where({ id: id })
        .fetch({ require: true })
        .then((user) => {
          ctx.body = user;
        })
        .catch((err) => {
          ctx.body = "Usuario não encontrado";
        });
    } catch (err) {
      ctx.throw(500, err);
    }
  }

  static async update(ctx) {
    const { body } = ctx.request;
    try {
      const user = await User.where({ id: ctx.params.id }).save(
        {
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          password_hash: body.password_hash,
        },
        { patch: true }
      );
      ctx.body = user;
    } catch (err) {
      ctx.throw(400, err);
    }
  }

  static async delete(ctx) {
    try {
      const user = await User.where({ id: ctx.params.id }).destroy();
      ctx.body = user;
    } catch (err) {
      ctx.throw(400, "Campo duplicado");
    }
  }
}

module.exports = UserController;
