import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const JwtMiddleware = (req: Request & { user: any }, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    try {
        const payload = jwt.verify(token!, process.env.JWT_SECRET!);
        req.user = payload;
        next();
    }
    catch(error) {
        next();
    }
}