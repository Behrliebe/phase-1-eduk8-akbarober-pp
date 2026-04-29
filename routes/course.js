const CourseController = require("../controllers/CourseController");
const router = require("express").Router();
const { isMentor } = require("../middlewares/login");

router.get("/add", isMentor, CourseController.getAddCourse);
router.post("/add", isMentor, CourseController.postAddCourse);

router.get("/:courseId", CourseController.getCourseDetail);

router.get("/:courseId/material/add", CourseController.getAddMaterial);
router.post("/:courseId/material/add", CourseController.postAddMaterial);

module.exports = router;
