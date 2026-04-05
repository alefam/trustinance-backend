import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './create-contact.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
    private transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    async sendContactEmail(dto: CreateContactDto) {
        await this.transporter.sendMail({
            from: `"Trustinance Kontaktformular" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_TO,
            subject: `Neue Kontaktanfrage: ${dto.thema}`,
            html: `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <p><strong>Name:</strong> ${dto.vorname} ${dto.nachname}</p>
        <p><strong>E-Mail:</strong> ${dto.mail}</p>
        <p><strong>Handy:</strong> ${dto.handy}</p>
        <p><strong>Thema:</strong> ${dto.thema}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${dto.nachricht}</p>
      `,
        });

        return { message: 'Nachricht erfolgreich gesendet.' };
    }
}