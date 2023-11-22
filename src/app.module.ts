import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApicallModule } from './apicall/apicall.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ApicallModule, PrismaModule, ConfigModule.forRoot({
    isGlobal : true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
