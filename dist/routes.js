"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var default_controller_1 = require("./controllers/default.controller");
var message_controller_1 = require("./controllers/message.controller");
var movie_controller_1 = require("./controllers/movie.controller");
var validation_middleware_1 = require("./middlewares/validation.middleware");
var movie_schema_1 = require("./validations/movie.schema");
exports.routes = (0, express_1.Router)()
    .get("/hello/:name", default_controller_1.DefaultController.getHello)
    .put("/message", message_controller_1.MessageController.send);
// routes.get("/movies", MovieController.getMovies);
// routes.post("/movies", MovieController.addMovie);
exports.routes.route('/movies')
    .get(movie_controller_1.MovieController.getMovies)
    .post((0, validation_middleware_1.ValidationMiddleware)(movie_schema_1.MovieSchema), movie_controller_1.MovieController.addMovie);
exports.routes.route('/movies/:id')
    .get(movie_controller_1.MovieController.getMovieById)
    .delete(movie_controller_1.MovieController.deleteMovie)
    .put((0, validation_middleware_1.ValidationMiddleware)(movie_schema_1.MovieSchema), movie_controller_1.MovieController.updateMovie);
// routes.route('/actors')
//   .post(ValidationMiddleware(ActorSchema),  () => {})
