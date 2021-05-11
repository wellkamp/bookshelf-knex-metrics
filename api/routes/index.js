const Router = require("koa-router");
const router = new Router();
const UserController = require("../controllers/UserController");

router.get("/users", UserController.index);
router.post("/users", UserController.create);
router.post("/users/:id", UserController.update);
router.post("/users/:id", UserController.delete);
router.get("/users/:id", UserController.show);

module.exports = router;
