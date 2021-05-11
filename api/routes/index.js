const Router = require("koa-router");
const router = new Router();
const UserController = require("../controllers/UserController");

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

module.exports = router;
