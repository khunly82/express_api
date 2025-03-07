import { Request, Response, text } from "express";
import nodemailer from "nodemailer";
import { mailer } from "../infrastucture/mailer";

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

      console.log(42);
      res.json({ status: "OK" });
    } catch (e) {
      console.log(e);
    }
  }
}
