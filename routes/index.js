const Controller = require("../controllers/controller");
const router = require("express").Router();
const routerAuth = require("./auth");
const routerStudent = require("./student");
const routerMentor = require("./mentor");
const routerCourse = require("./course");
const { isLoggedIn, isAdmin, isMentor } = require("../middlewares/login");

router.get("/", Controller.landing);
router.get("/logout", Controller.logout);

router.use("/auth", routerAuth);

router.use(isLoggedIn);

router.get("/home", Controller.home);

router.use("/student", routerStudent);
router.use("/mentor", routerMentor);
router.use("/course", routerCourse);

module.exports = router;
