import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export class AuthController {
    static login(req: Request, res: Response) {
        const { username, password } = req.body;

        const user = fakeDb.find(u => u.username === username);

        if(!user || user.password !== password) {
            res.status(401).send("invalid credentials");
            return;
        }
        const token = jwt.sign({
            id: user.id,
            username: user.username,
            role: user.role
        }, process.env.JWT_SECRET!, {
            expiresIn: '1d',
            algorithm: 'HS256'
        })

        res.json({token});
    }
}

const fakeDb = [
    { id: 1, username: 'Khun', password: '1234', role: 'ADMIN' },
    { id: 2, username: 'Thomas', password: '1234', role: 'CUSTOMER' },
]