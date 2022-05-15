import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ffdae038dc5055",
      pass: "131cacb948b895"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body } : SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Lucas Pereira <lucasgamesdark@gmail.com>',
            subject,
            html: body,
        })
    }
}