import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import {
  lastValueFrom,
  map,
} from 'rxjs';

@Injectable()
export class ApicallService {
  constructor(private readonly httpService: HttpService) {}

  async getUraian(kode: string): Promise<any> {
    return await lastValueFrom(
      this.httpService
        .get<any>(`https://insw-dev.ilcs.co.id/my/n/barang?hs_code=${kode}`)
        .pipe(
          map((res) => {
            return res.data;
          }),
        ),
    );
  }

  async getBm(kode : string ) : Promise<any> {
    return await lastValueFrom(
        this.httpService.get(`https://insw-dev.ilcs.co.id/my/n/tarif?hs_code=${kode}`).pipe(
            map((res) => {
                return res.data
            })
        )
    )
  }

}
