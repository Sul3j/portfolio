import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Throttle } from '@nestjs/throttler';

@Controller('email')
export class EmailController {
  private transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  @Post('send')
  @Throttle({ default: { limit: 2, ttl: 60}})
  async sendEmail(@Body() body: any) {
    const { firstName, lastName, email, message } = body;

    if (!firstName || !lastName || !email || !message) {
      throw new BadRequestException('Wszystkie pola są wymagane.');
    }

    try {
      await this.transporter.sendMail({
        from: `"${firstName} ${lastName}" <contact@szymonsulejczak.com>`,
        to: 'contact@szymonsulejczak.com',
        replyTo: email,
        subject: `Nowa wiadomość od ${firstName} ${lastName}`,
        text: `Od: ${email}\n\n${message}`,
      });

      return { message: 'Email wysłany pomyślnie!' };
    } catch (error) {
      throw new BadRequestException('Błąd podczas wysyłania emaila.');
    }
  }
}
