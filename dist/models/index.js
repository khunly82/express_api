"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var movie_1 = __importDefault(require("./movie"));
var actor_1 = __importDefault(require("./actor"));
var sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
});
var db = {
    sequelize: sequelize,
    movie: (0, movie_1.default)(sequelize),
    actor: (0, actor_1.default)(sequelize)
};
db.movie.belongsToMany(db.actor, { through: 'casting', timestamps: false });
db.actor.belongsToMany(db.movie, { through: 'casting', timestamps: false });
exports.default = db;
