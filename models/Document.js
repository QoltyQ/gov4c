const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Document = sequelize.define("Document", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  client_firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_IIN: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  order_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  order_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Document;
