import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Below is where routes are specified
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('quotes')
  // // This sharply defines the type of object returned (below)
  // getQuotes(): { message: string } {
  //   // return 'quotes';
  //   return { message: 'quotes' };
  // }
}
