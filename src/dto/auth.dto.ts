import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginBodyDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class RegisterBodyDto {
  @IsString()
  @IsNotEmpty()
  fname: string;

  @IsString()
  @IsNotEmpty()
  lname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  phone: number;

  @IsString()
  @IsNotEmpty()
  password: string;
}
