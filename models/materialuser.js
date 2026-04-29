"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MaterialUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  MaterialUser.init(
    {
      UserId: DataTypes.INTEGER,
      MaterialId: DataTypes.INTEGER,
      isFinished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "MaterialUser",
    },
  );
  return MaterialUser;
};
