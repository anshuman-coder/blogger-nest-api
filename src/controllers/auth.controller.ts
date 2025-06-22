import { Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/login')
  login() {
    return this.service.login();
  }

  @Post('register')
  register() {
    return this.service.register();
  }
}
