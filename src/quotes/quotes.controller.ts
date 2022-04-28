import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { identity } from 'rxjs';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './interfaces/quote.interface';
import { QuotesService } from './quotes.service';

@ApiTags('quotes') // Logically sorts out Swagger display by address path

@Controller('quotes')
export class QuotesController {
    constructor(private quotesService: QuotesService) {}

    @Get()
    getQuotes(): Quote[] {
        return this.quotesService.quotes;
    }

    @ApiParam({name: 'id'}) // Will add "id" as an input box param in Swagger for testing purposes
    @Get(':id') // http://localhost:3000/quotes/id
    getQuote(@Param('id') id): Quote {
        return this.quotesService.getQuote(id);
    }


    @Post()
    postQuote(@Body() createQuoteDto: CreateQuoteDto): Quote {
        // return createQuoteDto;
        // return createQuoteDto.title;
        // return `${createQuoteDto.author} authored the song "${createQuoteDto.title}"`;
        return this.quotesService.createQuote(createQuoteDto);
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    updateQuote(@Param('id') id, @Body() updateQuoteDto: CreateQuoteDto): Quote {
        return this.quotesService.updateQuote(id, updateQuoteDto);
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteQuote(@Param('id') id): Quote {
        return this.quotesService.deleteQuote(id);
    }
}
