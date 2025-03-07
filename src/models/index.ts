import { Dialect, Sequelize } from "sequelize";
import { Db } from "../@types/types";
import movieBuilder from "./movie";

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
};

export default db;
