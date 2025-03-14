import { NextFunction, Request, Response } from "express";

export const RoleGuard = (...roles: string[])  => 
    (req: Request & {user:any}, res: Response, next: NextFunction) => {
        if(roles.includes(req.user?.role)) {
            next();
        }
        else {
            res.sendStatus(403);
        }
    }