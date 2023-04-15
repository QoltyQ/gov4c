const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("gov4c", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
