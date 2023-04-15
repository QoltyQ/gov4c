const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const SC = sequelize.define("SC", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = SC;
