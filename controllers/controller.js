const { User, UserProfile, Course, Material } = require("../models");

class Controller {
  static async landing(req, res) {
    try {
      res.render("landing");
    } catch (error) {
      res.send(error);
    }
  }

  static async home(req, res) {
    try {
      const userRole = req.session.role;
      const courses = await Course.findAll({ include: Material });
      res.render("home", { courses, userRole });
    } catch (error) {
      res.send(error);
    }
  }

  static async logout(req, res) {
    try {
      req.session.destroy((err) => {
        if (err) {
          res.send(err);
        } else {
          res.redirect("/auth/login");
        }
      });
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = Controller;
