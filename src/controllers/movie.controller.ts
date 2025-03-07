import { Request, Response } from "express";
import db from "../models";

export class MovieController {
  static async getMovies(req: Request, res: Response) {
    const result = await db.movie.findAndCountAll({
      offset: 0,
      limit: 10,
    });

    res.json(result);
  }
}
