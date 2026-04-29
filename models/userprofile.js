"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserProfile.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  UserProfile.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "First Name is required!",
          },
          notEmpty: {
            msg: "First Name is required!",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Last Name is required!",
          },
          notEmpty: {
            msg: "Last Name is required!",
          },
        },
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Date is required!",
          },
          notEmpty: {
            msg: "Date is required!",
          },
          isTenYears(value) {
            if (value) {
              let year = new Date().getFullYear() - value.getFullYear();
              let month = new Date().getMonth() - value.getMonth();
              let day = new Date().getDate() - value.getDate();

              if (day < 0) {
                month--;
              }

              if (month < 0) {
                year--;
              }

              if (year < 11) {
                throw new Error("Age must be 10 years or older!");
              }
            }
          },
        },
      },
      phoneNumber: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserProfile",
    },
  );
  return UserProfile;
};
