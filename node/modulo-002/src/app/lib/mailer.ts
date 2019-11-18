import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import configs from '../../config/mails';

class Mailer {

    transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport(configs);
    }

    public sendMail(message: any) {
        return this.transporter.sendMail({
            ...configs.default,
            ...message
        });
    }
}

export default new Mailer();
