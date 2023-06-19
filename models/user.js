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
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: true, unique: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      tableName: "user",
      modelName: "User",
    }
  );
  return User;
};
