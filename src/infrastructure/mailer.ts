import nodemailer from 'nodemailer';


export const mailer = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port:  parseInt(process.env.SMTP_PORT ?? ''),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PWD
    }
})
