import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public hisobla(data: number[]): number {
    return (data || []).reduce((a,b)=> Number(a) + Number(b));
  }
}
