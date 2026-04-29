const { User, UserProfile } = require("../models");
const bcrypt = require("bcryptjs");

class AuthController {
  static async getRegister(req, res) {
    try {
      res.render("AuthPages/register");
    } catch (error) {
      res.send(error);
    }
  }

  static async postRegister(req, res) {
    try {
      const {
        firstName,
        lastName,
        birthDate,
        phoneNumber,
        email,
        password,
        role,
      } = req.body;
      const newUser = await User.create({ email, password, role });
      await UserProfile.create({
        firstName,
        lastName,
        birthDate,
        phoneNumber,
        UserId: newUser.id,
      });
      res.redirect("/auth/login");
    } catch (error) {
      res.send(error);
    }
  }

  static async getLogin(req, res) {
    try {
      const { error } = req.query;
      res.render("AuthPages/login", { error });
    } catch (error) {
      res.send(error);
    }
  }

  static async postLogin(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (user) {
        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (isValidPassword) {
          req.session.userId = user.id;
          req.session.role = user.role;
          res.redirect("/");
        } else {
          const err = "Invalid Email or Password";
          res.redirect("/auth/login?error=" + err);
        }
      } else {
        const err = "Invalid Email or Password";
        res.redirect("/auth/login?error=" + err);
      }
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = AuthController;
