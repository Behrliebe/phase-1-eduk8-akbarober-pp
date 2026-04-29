const AuthController = require("../controllers/AuthController");

const router = require("express").Router();

router.get("/register", AuthController.getRegister);
router.post("/register", AuthController.postRegister);

router.get("/login", AuthController.getLogin);
router.post("/login", AuthController.postLogin);

module.exports = router;
