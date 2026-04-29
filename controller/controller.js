const { User, UserProfile } = require("../models");

class Controller {
  static async home(req, res) {
    try {
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
}

module.exports = Controller;
