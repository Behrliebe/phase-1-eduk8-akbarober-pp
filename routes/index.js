const Controller = require("../controller/controller");
const router = require("express").Router();

router.get("/", Controller.home);
router.get("/student/profile/:profileId", Controller.getStudentProfile);

module.exports = router;
