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
}
