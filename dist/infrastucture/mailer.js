"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailer = void 0;
var nodemailer_1 = __importDefault(require("nodemailer"));
exports.mailer = nodemailer_1.default.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt((_a = process.env.SMTP_PORT) !== null && _a !== void 0 ? _a : ''),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PWD
    }
});
