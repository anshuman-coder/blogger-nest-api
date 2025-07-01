import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth.module';
import { PrismaModule } from './modules/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, PrismaModule],
})
export class AppModule {}
