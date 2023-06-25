"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate({ User, Order }) {
      this.belongsTo(User, { foreignKey: "user_id", as: "user" });
      this.hasOne(Order, {
        foreignKey: "pickup_address_id",
        as: "pickupAddress",
      });
      this.hasOne(Order, {
        foreignKey: "dropoff_address_id",
        as: "dropoffAddress",
      });
    }
  }
  Address.init(
    {
      street: {
        type: DataTypes.STRING(255),
      },
      city: {
        type: DataTypes.STRING(100),
      },
      state: {
        type: DataTypes.STRING(100),
      },
      postal_code: {
        type: DataTypes.STRING(20),
      },
      country: {
        type: DataTypes.STRING(100),
      },
      latitude: {
        type: DataTypes.DECIMAL(8, 6),
      },
      longitude: {
        type: DataTypes.DECIMAL(9, 6),
      },
    },
    {
      sequelize,
      modelName: "Address",
      tableName: "address",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Address;
};
