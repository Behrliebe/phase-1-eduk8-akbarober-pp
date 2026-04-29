const ProfileController = require("../controllers/ProfileController");
const router = require("express").Router();

router.get("/profile/:profileId", ProfileController.getMentorProfile);
router.post("/profile/:profileId", ProfileController.postMentorProfile);

module.exports = router;
