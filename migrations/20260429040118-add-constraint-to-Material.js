"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("MaterialUsers", {
      fields: ["MaterialId"],
      type: "foreign key",
      name: "add_FK_to_MaterialId",
      references: {
        table: "Materials",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "MaterialUsers",
      "add_FK_to_MaterialId",
    );
  },
};
