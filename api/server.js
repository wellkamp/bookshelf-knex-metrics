const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");

const app = new Koa();
const router = new Router();
const PORT = 3000;

app.use(koaBody());
app.use(router.routes());

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "PASS",
    database: "bookshelf_metrics",
    charset: "utf8",
  },
});
const bookshelf = require("bookshelf")(knex);

// Defining models
const User = bookshelf.model("User", {
  tableName: "users",
});

router.get("/users", async (ctx) => {
  const users = await User.query();
  ctx.body = users;
});

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`));
