"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Address, Vehicle, Worker, WorkerOrder }) {
      // define association here
      this.belongsTo(User, { foreignKey: "user_id", as: "user" });
      this.belongsTo(Vehicle, { foreignKey: "vehicle_id", as: "vehicle" });
      this.belongsTo(Address, {
        foreignKey: "pickup_address_id",
        as: "pickupAddress",
      });
      this.belongsTo(Address, {
        foreignKey: "dropoff_address_id",
        as: "dropoffAddress",
      });
      this.belongsToMany(Worker, { through: WorkerOrder });
    }
  }
  Order.init(
    {
      // user_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      // pickup_address_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      // dropoff_address_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      description: {
        type: DataTypes.TEXT,
      },
      vehicle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(100),
        defaultValue: "pending",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "order",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Order;
};
