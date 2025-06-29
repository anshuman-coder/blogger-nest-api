import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth.module';
import { PrismaModule } from './modules/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
})
export class AppModule {}
