import { Router } from "express";
import { DefaultController } from "./controllers/default.controller";
import { MessageController } from "./controllers/message.controller";
import { MovieController } from "./controllers/movie.controller";
import { ValidationMiddleware } from "./middlewares/validation.middleware";
import { MovieSchema, MovieWithActorsSchema } from "./validations/movie.schema";
import { ActorSchema } from "./validations/actor.schema";
import { ActorController } from "./controllers/actor.controller";

export const routes = Router()
  .get("/hello/:name", DefaultController.getHello)
  .put("/message", MessageController.send);

// routes.get("/movies", MovieController.getMovies);
// routes.post("/movies", MovieController.addMovie);
routes.route('/movies')
  .get(MovieController.getMovies)
  .post(ValidationMiddleware(MovieSchema), MovieController.addMovie);

routes.route('/movies/:id')
  .get(MovieController.getMovieById)
  .delete(MovieController.deleteMovie)
  .put(ValidationMiddleware(MovieWithActorsSchema), MovieController.updateMovie);

routes.route('/actors')
  .post(ValidationMiddleware(ActorSchema), ActorController.addActor)
