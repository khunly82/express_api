import { Request, Response } from 'express';
import db from '../models'

export class ActorController {
    static async addActor(req: Request, res: Response) {
        const { lastName, firstName, birthDate } = req.body;
        const data = await db.actor.create({ 
            lastName, 
            firstName, 
            birthDate
        });
        res.status(201).json(data);
    }
}