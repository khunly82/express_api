import { Request, Response, text } from 'express';
import nodemailer from 'nodemailer';

export class MessageController {
    static async send(req: Request, res: Response) {
        try {
            const transporter = nodemailer.createTransport({
                host: 'ssl0.ovh.com',
                port:  587,
                secure: false,
                auth: {
                    user: 'ft@khunly.be',
                    pass: 'test1234='
                }
            })

            await transporter.sendMail({
                from: 'ft@khunly.be',
                to: 'khun.ly@bstorm.be',
                subject: 'test email',
                text: 'test html'
            });
            res.json({ status: 'OK' });
        } catch(e) {
            console.log(e);
        }
    }
}