import { Request, Response } from "express";
import db from "../models";

export class MovieController {
  static async getMovies(_: Request, res: Response) {
    const result = await db.movie.findAndCountAll({
      offset: 0,
      limit: 10,
      include: [db.actor]
    });
    /* mapping Movies => { count: number, rows: [{
      id: number,
      title: string,
      releaseYear: number,
      hasSubtitle: bool,
      nbActors: number
    }] }
    */
    const data = { 
      count: result.count,
      rows: result.rows.map((r) => ({
        id: r.id,
        title: r.title,
        releaseYear: r.releaseYear,
        hasSubtitle: r.hasSubtitle,
        nbActors: r.actors?.length
      }))
    }
    res.json(data);
  }

  static async addMovie(req: Request, res: Response) {
    const { title, duration, hasSubtitle, releaseYear } = req.body;
    
    const movie = await db.movie.findOne({ where: {
      title,
      releaseYear
    }});

    if(!movie) {
      const data = await db.movie.create({ title, duration, hasSubtitle, releaseYear });
      res.status(201).json(data.toJSON());
    }
    else {
      res.status(400).json({
        error: 'Ce film existe déjà'
      });
    }

  }

  static async getMovieById(req: Request, res: Response) {
    const { id } = req.params;
    const movie = await db.movie.findOne({
      where: { id },
      include: [db.actor]
    });
    if(!movie) {
      res.sendStatus(404);
    }
    else {
      res.json(movie.toJSON());
    }
  }

  static async deleteMovie(req: Request, res: Response) {
    const { id } = req.params;
    const movie = await db.movie.findOne({
      where: { id }
    });
    if(!movie) {
      res.sendStatus(404);
    }
    else {
      await movie.destroy();
      res.json(movie.toJSON());
    }
  }

  static async updateMovie(req: Request, res: Response) {
    const { id } = req.params;
    const { title, releaseYear, hasSubtitle, duration, actors } = req.body;
    const movie = await db.movie.findOne({
      where: { id },
      include: [db.actor]
    });
    if(!movie) {
      res.sendStatus(404);
    }
    else {

      // Update movie's actors list 
      await movie.setActors(await db.actor.findAll({
        where: {
          id: actors
        }
      }));
      const data = await movie.update({
        title,
        releaseYear,
        duration,
        hasSubtitle,
      });

      res.json(data.toJSON())
    }
  }
}
