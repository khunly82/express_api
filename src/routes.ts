import { Router } from "express";
import { DefaultController } from "./controllers/default.controller";
import { MessageController } from "./controllers/message.controller";
import { MovieController } from "./controllers/movie.controller";

export const routes = Router()
  .get("/hello/:name", DefaultController.getHello)
  .put("/message", MessageController.send);

routes.get("/movies", MovieController.getMovies);
