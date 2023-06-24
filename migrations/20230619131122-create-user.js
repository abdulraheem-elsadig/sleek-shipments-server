"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable("user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING(20),
      },
      avatar: {
        allowNull: true,
        type: DataTypes.STRING(100),
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("user");
  },
};
