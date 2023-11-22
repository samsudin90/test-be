import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { ApicallService } from './apicall/apicall.service';
import { PostDto } from './app.dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(
    private http: ApicallService,
    private prisma: PrismaService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async cekHarga(data: PostDto) {

    if(data.data.length != 8) {
      throw new NotAcceptableException
    }

    const uraian = await this.http.getUraian(data.data);
    if (!uraian) {
      throw new NotFoundException();
    }
    if (uraian.code != 200) {
      throw new NotFoundException();
    }

    const bm = await this.http.getBm(data.data);
    if (!bm) {
      throw new NotFoundException();
    }
    if (bm.code != 200) {
      throw new NotFoundException();
    }

    const ub = uraian.data[0].sub_header;
    const b = bm.data[0].bm;

    try {
      const prod = await this.prisma.produk.create({
        data: {
          kode_barang: data.data,
          uraian_barang: ub,
          bm: parseFloat(b),
          nilai_komoditas: data.nilai,
          nilai_bm: (data.nilai * b) / 100,
        },
      });

      return prod;
    } catch (error) {
      throw error;
    }
  }
}
