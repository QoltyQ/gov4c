const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Request = sequelize.define("Request", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_num: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  representative: {
    type: DataTypes.STRING
  },
  address_sc: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address_deliv: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Request;
