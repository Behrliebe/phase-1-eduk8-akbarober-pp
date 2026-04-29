const { where } = require("sequelize");
const { User, UserProfile, Course } = require("../models");
const { Op } = require("sequelize");
const userprofile = require("../models/userprofile");

class Controller {
  static async home(req, res) {
    try {
      let { search } = req.query;
      let options = {};
      if (search) {
        options = {
          where: {
            name: { [Op.iLike]: `%${search}%` },
          },
        };
      }
      let course = await Course.findAll(options);
      res.render("home", { course, search });
    } catch (error) {
      res.send(error);
    }
  }

  static async getStudentProfile(req, res) {
    try {
      const { profileId } = req.params;
      const student = await UserProfile.findByPk(profileId);
      res.render("student-profile", { student });
    } catch (error) {
      res.send(error);
    }
  }

  static async adminPage(req, res) {
    try {
      let data = await User.findAll({
        include: UserProfile,
      });
      res.render("adminPage", { data });
    } catch (error) {
      res.send(error);
    }
  }

  static async addUser(req, res) {
    try {
      res.render("addUser");
    } catch (error) {
      res.send(error);
    }
  }

  static async postAdd(req, res) {
    try {
      const { email, password, role, firstName, lastName, birthDate } = req.body;
      const newUser = await User.create({ email, password, role });
      await UserProfile.create({
        firstName,
        lastName,
        birthDate,
        UserId: newUser.id,
      });
      res.redirect("/admin");
    } catch (error) {
      res.send(error);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await User.destroy({ where: { id } });
      res.redirect("/admin");
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = Controller;