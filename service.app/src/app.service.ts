import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  private client: ClientProxy;

  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8877,
        }
    })
  }


  public hisobla(data: number[]) {
    return this.client.send<number, number[]>('add', data)
  }
}




// const microserviceOptions: ClientOptions = {
//   transport: Transport.TCP,
//   options: {
//     host: '127.0.0.1',
//     port: 8877,
//   }
// }

// const client = ClientProxyFactory.create(microserviceOptions);

// client
//   .send<number, number[]>('add', [1,2,3])
//   .subscribe(result => logger.log(result));

