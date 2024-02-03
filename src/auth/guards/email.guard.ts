// email.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EmailService } from './email.service';
import { AuthService } from '../auth.service';

@Injectable()
export class EmailGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private emailService: EmailService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { email } = request.body; // Assuming email is passed in the request body

    // Generate and send OTP via email
    const otp = this.authService.generateOtp();
    this.emailService.sendOtpEmail(email, otp);

    // Store the OTP in a secure way (e.g., database) for later verification
    this.authService.storeOtp(email, otp);

    return true; // Allow the request to proceed
  }
}
