const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Request = sequelize.define("Request", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    address_sc: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    address_deliv: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})

module.exports = Request;