"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = (function (sequelize) {
    var movie = sequelize.define("movie", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        releaseYear: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        duration: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        hasSubtitle: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: true,
        },
    }, {
        tableName: "movies",
        timestamps: false,
    });
    return movie;
});
