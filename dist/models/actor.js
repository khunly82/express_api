"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = (function (sequelize) {
    var actor = sequelize.define('actor', {
        id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        firstName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        lastName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        birthDate: { type: sequelize_1.DataTypes.DATE, allowNull: true }
    }, {
        timestamps: false,
        tableName: 'actors'
    });
    return actor;
});
