"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // static associate({Cart, Review, Address, Blog}) {
    //   this.hasOne(Cart, {foreignKey: 'userId', as: 'cart'});
    //   this.hasMany(Review, {foreignKey: 'userId', as: 'reviews'});
    //   this.hasMany(Blog, {foreignKey: 'userId', as: 'blogs'});
    //   this.hasMany(Address, {foreignKey: 'userId', as: 'addresses'});
    // }
  }
  User.init(
    {
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
    },
    {
      sequelize,
      tableName: "user",
      modelName: "User",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return User;
};
