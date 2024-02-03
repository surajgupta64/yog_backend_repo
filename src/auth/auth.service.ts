import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  generateOtp(): string {
    // Implement your logic to generate an OTP
    // For simplicity, let's generate a 6-digit random number
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  storeOtp(email: string, otp: string): void {
    // Implement your logic to securely store the OTP
    // For simplicity, you can store it in an in-memory object or a database
    // Make sure to associate the OTP with the user's email for later verification
    // Example:
    // otpStorage[email] = otp;
    console.log(`Stored OTP ${otp} for ${email}`);
  }
  
  async validateUser(email: string, pass: string): Promise<any> {
    const userDb = await this.userService.findOne({ email });

    if (!userDb) {
      throw new BadRequestException('Invalid Credentials');
    }
    if (userDb?.password !== pass) {
      return null;
    }

    return userDb;
  }
}
