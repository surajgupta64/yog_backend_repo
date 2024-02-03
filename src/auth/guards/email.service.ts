// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    // Configure the SMTP transport
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // Use the appropriate port for your SMTP server
      secure: false, // Set to true if using a secure connection (e.g., TLS)
      auth: {
        user: 'surajgupta6415@gmail.com',
        pass: 'Suraj@771',
      },
    });
    }
    
  async sendOtpEmail(email: string, otp: string): Promise<void> {
    const mailOptions = {
      from: 'surajgupta6415@gmail.com',
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP is: ${otp}`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
