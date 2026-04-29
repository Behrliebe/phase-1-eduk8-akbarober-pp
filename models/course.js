"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.hasMany(models.Material, { foreignKey: "CourseId" });
      Course.belongsToMany(models.User, { through: models.CourseUser });
    }
  }
  Course.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Course name is required!",
          },
          notEmpty: {
            msg: "Course name is required!",
          },
        },
      },
      description: DataTypes.TEXT,
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Price is required!",
          },
          notEmpty: {
            msg: "Price is required!",
          },
          max: 1000000,
        },
      },
      code: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Course",
    },
  );

  Course.beforeCreate((x) => {
    x.code = `${x.category.slice(0, 2).toUpperCase()}-${new Date().getTime()}-${x.name.slice(0, 3).toUpperCase()}`;
  });
  return Course;
};
