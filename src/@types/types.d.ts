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
  actor: ModelStatic<Actor>;
}

export interface Movie 
  extends Model<InferAttributes<Movie>, InferCreationAttributes<Movie>> {
  id: CreationOptional<number>;
  title: string;
  releaseYear: number;
  duration: number;
  hasSubtitle: boolean;
  actors?: Actor[];
  setActors: (actors: Actor[]) => Promise<any> 
}

export interface Actor extends Model<InferAttributes<Actor>, InferCreationAttributes<Actor>> {
  id: CreationOptional<number>;
  firstName: string;
  lastName: string;
  birthDate: Date;
  movies?: Movie[];
}
