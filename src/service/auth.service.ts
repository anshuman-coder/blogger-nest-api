import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { message: 'This is login!' };
  }

  register() {
    return { message: 'This is register!' };
  }
}
