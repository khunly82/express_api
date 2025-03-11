import { Request, Response } from "express"
import { ObjectSchema, ValidationError } from "yup";

export const ValidationMiddleware = (schema: ObjectSchema<any>) => async (
    req: Request, res: Response, next: any
) => {
    // si les données sont valides
    try {
        const data = await schema.validate(req.body, { abortEarly: false })
        // passer au middleware suivant
        req.body = data;
        next();
    } catch(error) {
        // sinon on envoie un code d'erreur
        if(error instanceof ValidationError) {
            res.status(400).json(error);
        }
        else {
            res.sendStatus(500);
        }
    }
}