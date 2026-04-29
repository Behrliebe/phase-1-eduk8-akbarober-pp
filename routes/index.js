const Controller = require("../controller/controller");
const router = require("express").Router();

router.get("/", Controller.home);
router.get("/student/profile/:profileId", Controller.getStudentProfile);
router.get("/admin", Controller.adminPage);
router.get("/admin/delete/:id", Controller.delete);
router.get("/admin/addUser", Controller.addUser);
router.post("/admin/addUser", Controller.postAdd);

module.exports = router;