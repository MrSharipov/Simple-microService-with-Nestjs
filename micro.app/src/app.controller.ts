import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern} from '@nestjs/microservices'

@Controller()
export class AppController {

  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @Post('add')
  @MessagePattern('add')
  hisobla(data : number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.appService.hisobla(data);
  }
  
}
