const { User, UserProfile, Course, Material } = require("../models");

class CourseController {
  static async getCourseDetail(req, res) {
    const { courseId } = req.params;
    try {
      const role = req.session.role;
      const course = await Course.findByPk(courseId, { include: Material });
      res.render("CoursePages/course-detail", { course, role });
    } catch (error) {
      res.send(error);
    }
  }

  static async getAddCourse(req, res) {
    try {
      res.render("CoursePages/add-course");
    } catch (error) {
      res.send(error);
    }
  }

  static async postAddCourse(req, res) {
    try {
      const { name, description, price, category } = req.body;
      await Course.create({ name, description, price, category });
      res.redirect("/mentor/profile/");
    } catch (error) {
      res.send(error);
    }
  }

  static async getAddMaterial(req, res) {
    try {
      const { courseId } = req.params;
      res.render("CoursePages/add-material", { courseId });
    } catch (error) {
      res.send(error);
    }
  }

  static async postAddMaterial(req, res) {
    try {
      const { courseId } = req.params;
      const { name, fileUrl } = req.body;
      await Material.create({ name, fileUrl, CourseId: courseId });
      res.redirect(`/course/${courseId}`);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = CourseController;
