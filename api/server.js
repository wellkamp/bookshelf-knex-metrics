const Koa = require("koa");
const koaBody = require("koa-body");
const router = require("./routes");

const app = new Koa();
const PORT = 3000;

app.use(koaBody({ multipart: true }));
app.use(router.routes());
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`));

module.exports = app;
