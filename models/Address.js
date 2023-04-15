const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Address = sequelize.define("Address", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  region: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  city: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  street: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  house_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  apartment: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  entrance: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  floor: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  housing: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  residential_area: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  additional_info: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Address;
