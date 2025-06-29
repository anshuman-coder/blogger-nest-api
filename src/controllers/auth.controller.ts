import { Body, Controller, Post } from '@nestjs/common';
import { LoginBodyDto, RegisterBodyDto } from 'src/dto';
import { AuthService } from 'src/service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/login')
  login(@Body() dto: LoginBodyDto) {
    return this.service.login(dto);
  }

  @Post('register')
  register(@Body() dto: RegisterBodyDto) {
    return this.service.register(dto);
  }
}
