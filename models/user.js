"use strict";
const { Model } = require("sequelize");
const hashPassword = require("../helper/helper");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.UserProfile, { foreignKey: "UserId" });
      User.belongsToMany(models.Course, { through: models.CourseUser });
      User.belongsToMany(models.Material, { through: models.MaterialUser });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email has already been used!",
        },
        validate: {
          notNull: {
            msg: "Email is required!",
          },
          notEmpty: {
            msg: "Email is required!",
          },
          isEmail: {
            msg: "Please enter a valid email!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "First Name is required!",
          },
          notEmpty: {
            msg: "First Name is required!",
          },
          isEnoughLength(value) {
            if (value.length < 9) {
              throw new Error("Password must be at least 8 characters");
            }
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Role is required!",
          },
          notEmpty: {
            msg: "Role is required!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    },
  );

  User.beforeCreate((x) => {
    x.password = hashPassword(x.password);
  });
  return User;
};
