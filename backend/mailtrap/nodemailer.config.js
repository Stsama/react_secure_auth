import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
import { WELCOME_EMAIL } from './emailTemplates.js';

dotenv.config()

const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'albertezoula98@gmail.com',
        pass: process.env.NODE_MAILER_PASSWORD
    }
});


export default function sendMail(to, sub, msg){
    transporter.sendMail({
        to:to,
        subject: sub,
        html: msg
    })
    console.log('email sent')
}


