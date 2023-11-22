import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApicallService } from './apicall/apicall.service';
import { lastValueFrom, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { PostDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private http : ApicallService) {}

  @Get()
  async getHello() {
    // const data = await this.http.getUraian('10079000')
    // console.log(data)
    const data1 = await this.http.getBm('10079000')
    // console.log(data1.code)
    return 1
  }
  
  @Post()
  produk(@Body() req : PostDto) {
    return this.appService.cekHarga(req)
  }
}
