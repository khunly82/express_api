import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelCtor,
  Sequelize,
} from "sequelize";

/* DATABASE */
export interface Db {
  sequelize: Sequelize;
  movie: ModelCtor<Movie>;
}

export interface Movie
  extends Model<InferAttributes<Movie>, InferCreationAttributes<Movie>> {
  id: CreationOptional<number>;
  title: string;
  releaseYear: number;
  duration: number;
  hasSubtitle: boolean;
}
