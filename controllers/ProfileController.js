const { User, UserProfile } = require("../models");

class ProfileController {
  static async getStudentProfile(req, res) {
    try {
      const userId = req.session.userId;
      const student = await UserProfile.findOne({
        where: {
          UserId: userId,
        },
      });
      res.render("student-profile", { student });
    } catch (error) {
      res.send(error);
    }
  }

  static async postStudentProfile(req, res) {
    const { profileId } = req.params;
    try {
      const { firstName, lastName, birthDate, phoneNumber } = req.body;
      await UserProfile.update(
        { firstName, lastName, birthDate, phoneNumber },
        { where: { id: profileId } },
      );
      res.redirect(`/student/profile/${profileId}`);
    } catch (error) {
      res.send(error);
    }
  }

  static async getMentorProfile(req, res) {
    const { profileId } = req.params;
    try {
      const mentor = await UserProfile.findByPk(profileId, { include: User });
      res.render("mentor-profile", { mentor });
    } catch (error) {
      res.send(error);
    }
  }

  static async postMentorProfile(req, res) {
    const { profileId } = req.params;
    try {
      const { firstName, lastName, birthDate, phoneNumber } = req.body;
      await UserProfile.update(
        { firstName, lastName, birthDate, phoneNumber },
        { where: { id: profileId } },
      );
      res.redirect(`/mentor/profile/${profileId}`);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = ProfileController;
