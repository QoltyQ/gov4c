const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const OTP = sequelize.define("OTP", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  otp: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = OTP;
