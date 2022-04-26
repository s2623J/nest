import { Controller, Get } from '@nestjs/common';

@Controller()
export class QuotesController {

    @Get('quotes')
    getQuotes(): { message: string } {
        return { message: 'Hello from Quote Controller ;-)' };
    }
}
