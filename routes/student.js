const ProfileController = require("../controllers/ProfileController");
const router = require("express").Router();

router.get("/profile/", ProfileController.getStudentProfile);
router.post("/profile/", ProfileController.postStudentProfile);

module.exports = router;
