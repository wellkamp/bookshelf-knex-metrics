const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");
const User = require('./models/user.js')

const app = new Koa();
const router = new Router();
const PORT = 3000;

app.use(koaBody());
app.use(router.routes());

var 

router.get("/users", (ctx) => {
  ctx.body = "Testando servidor";
});

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`));
