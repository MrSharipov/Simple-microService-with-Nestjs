import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @Post('add')
  async hisobla(@Body('data') data: number[]) {
    this.logger.log("Adding: " + data);
    return this.appService.hisobla(data);
  }
}
