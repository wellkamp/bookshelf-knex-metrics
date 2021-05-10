const Router = require("koa-router");
const router = new Router();
const UserController = require("../controllers/UserController");

router.get("/users", UserController.index);
router.post("/users", UserController.create);

module.exports = router;
