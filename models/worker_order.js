"use strict";
const { Model } = require("sequelize");
const { Order, Worker } = require("./index");
module.exports = (sequelize, DataTypes) => {
  class WorkerOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkerOrder.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Order,
          key: "id",
        },
      },
      worker_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Worker,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "WorkerOrder",
      tableName: "worker_order",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return WorkerOrder;
};
