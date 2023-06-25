"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {}
  Vehicle.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      photo: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      load: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      is_active: {
        allowNull: true,
        defaultValue: true,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      tableName: "vehicle",
      modelName: "Vehicle",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Vehicle;
};
