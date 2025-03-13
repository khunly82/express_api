import { Dialect, Sequelize } from "sequelize";
import { Db } from "../@types/types";
import movieBuilder from "./movie";
import actorBuilder from "./actor";

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PWD!,
  {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    dialect: process.env.DB_DIALECT as Dialect,
  }
);

const db: Db = {
  sequelize,
  movie: movieBuilder(sequelize),
  actor: actorBuilder(sequelize)
};

db.movie.belongsToMany(db.actor, { through: 'casting', timestamps: false });
db.actor.belongsToMany(db.movie, { through: 'casting', timestamps: false });

export default db;
