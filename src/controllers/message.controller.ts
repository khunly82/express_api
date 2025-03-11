import { Request, Response, text } from "express";
import { mailer } from "../infrastructure/mailer";

export class MessageController {
  static async send(req: Request, res: Response) {
    const { to, subject, text } = req.body;

    try {
      await mailer.sendMail({
        from: process.env.SMTP_USER,
        to: to,
        subject: subject,
        text: text,
      });
      res.json({ status: "OK" });
    } catch (e) {
      console.log(e);
    }
  }
}
