import { NextFunction, Request, Response } from "express";

export const AuthenticatedGuard 
= (req: Request & { user: any }, res: Response, next: NextFunction) => {
    if(req.user) {
        next();
    }
    else {
        res.sendStatus(401);
    }
}