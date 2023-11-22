import { Module } from '@nestjs/common';
import { ApicallService } from './apicall.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports : [HttpModule.register({
  })],
  providers: [ApicallService],
  exports : [ApicallService]
})
export class ApicallModule {}
