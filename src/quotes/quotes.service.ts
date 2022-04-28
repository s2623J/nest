import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './interfaces/quote.interface';

@Injectable()
export class QuotesService {
    quotes: Quote[] = [
        {
            id:     '1',
            title:  'Impossible is for the unwilling',
            author: 'John Keats'
        }, {
            id:     '2',
            title:  'No pressuer, no diamonds',
            author: 'Thomas Carlyle'
        }
    ]

    getQuotes() {
        return { message: 'Hello from the Quote Controller ;-)' };
    }

    getQuote(id: string): Quote {
        return this.quotes.find(quote => quote.id === id);
    }

    createQuote(quote: Quote) {
        return quote;
        // return `${quote.author} authored the song "${quote.title}"`;    
    }

    updateQuote(id: string, updateQuoteDto: CreateQuoteDto): Quote {
        const data = this.quotes.find( quote => quote.id === id);
        data.title = updateQuoteDto.title ? updateQuoteDto.title : data.title;
        data.author = updateQuoteDto.author ? updateQuoteDto.author : data.author;
        return data;
    }

    deleteQuote(id: string): Quote {
        return this.quotes.find( quote => quote.id === id);
    }
}
