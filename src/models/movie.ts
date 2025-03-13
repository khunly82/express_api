import { DataTypes, Sequelize } from "sequelize";
import { Movie } from "../@types/types";
import actor from "./actor";

export default (sequelize: Sequelize) => {
  const movie = sequelize.define<Movie>(
    "movie",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hasSubtitle: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      tableName: "movies",
      timestamps: false,
    }
  );
  return movie;
};
