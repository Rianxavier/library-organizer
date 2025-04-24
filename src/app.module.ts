import { Module } from '@nestjs/common';
import { BooksController } from './Controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/biblioteca')],
  controllers: [BooksController],
  providers: [],
})
export class AppModule {}
