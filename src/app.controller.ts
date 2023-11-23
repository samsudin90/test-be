import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApicallService } from './apicall/apicall.service';
import { lastValueFrom, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { PostDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return this.appService.getHello()
  }
  
  @Post()
  produk(@Body() req : PostDto) {
    return this.appService.cekHarga(req)
  }
}
