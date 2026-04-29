"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Material.hasMany(models.MaterialUser, { foreignKey: "MaterialId" });
      Material.belongsToMany(models.Course, { foreignKey: "CourseId" });
    }
  }
  Material.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Material name is required!",
          },
          notEmpty: {
            msg: "Material name is required!",
          },
        },
      },
      fileUrl: DataTypes.STRING,
      CourseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Material",
    },
  );
  return Material;
};
