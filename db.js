const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("gov4c", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
