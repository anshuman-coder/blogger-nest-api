import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import * as argon from 'argon2';
import { LoginBodyDto, RegisterBodyDto } from 'src/dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async login({ email, password }: LoginBodyDto) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { password: true, id: true },
    });

    if (!user?.password)
      throw new HttpException(
        "User doesn't exists, please register first!",
        HttpStatus.NOT_FOUND,
      );
    const verify = await argon.verify(user?.password, password);

    if (!verify)
      throw new HttpException(
        'Password do not match!',
        HttpStatus.UNAUTHORIZED,
      );

    const _user = await this.prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        fname: true,
        lname: true,
        email: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return {
      data: {
        ..._user,
        phone: _user?.phone?.toString(),
      },
    };
  }

  async register(dto: RegisterBodyDto) {
    const hashPass = await argon.hash(dto.password);

    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (user)
      throw new HttpException('User already exists!', HttpStatus.CONFLICT);

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: hashPass,
      },
      select: {
        id: true,
        email: true,
        fname: true,
        lname: true,
        phone: true,
      },
    });

    return {
      data: { ...newUser, phone: newUser.phone?.toString() },
    };
  }
}
