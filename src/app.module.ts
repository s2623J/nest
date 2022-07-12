import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesController } from './quotes/quotes.controller';
import { QuotesService } from './quotes/quotes.service';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://127.0.0.1/quotes', {
  //   useNewUrlParser: true
  // })],
  controllers: [AppController, QuotesController],
  providers: [AppService, QuotesService],
})

export class AppModule {}
