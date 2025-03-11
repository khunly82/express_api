import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelStatic,
  Sequelize,
} from "sequelize";

/* DATABASE */
export interface Db {
  sequelize: Sequelize;
  movie: ModelStatic<Movie>;
}

export interface Movie 
  extends Model<InferAttributes<Movie>, InferCreationAttributes<Movie>> {
  id: CreationOptional<number>;
  title: string;
  releaseYear: number;
  duration: number;
  hasSubtitle: boolean;
}
