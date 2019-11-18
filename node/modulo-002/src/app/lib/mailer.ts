import nodemailer from 'nodemailer';
import { resolve } from 'path';
import exphbs from 'express-handlebars';
import Mail from 'nodemailer/lib/mailer';
import configs from '../../config/mails';

const nodemailerhbs = require('nodemailer-express-handlebars');

interface Message {
    to: string;
    subject: string;
    text?: string;
    template?: string;
    context?: any;
}

class Mailer {

    transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport(configs);
        this.configureTemplates();
    }

    private configureTemplates() {
        const viewPath = resolve(__dirname, '..', 'views', 'emails');
        this.transporter.use('compile', nodemailerhbs({
            viewEngine: exphbs.create({
                layoutsDir: resolve(viewPath, 'layouts'),
                partialsDir: resolve(viewPath, 'partials'),
                defaultLayout: 'default',
                extname: '.hbs'
            }),
            viewPath,
            extname: '.hbs'
        }));
    }

    public sendMail(message: Message) {
        return this.transporter.sendMail({
            ...configs.default,
            ...message
        });
    }
}

export default new Mailer();
