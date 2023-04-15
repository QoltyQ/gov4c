const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("gov4c", "postgres", "heyT^T678", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
