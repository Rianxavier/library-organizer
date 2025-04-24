import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks(): string {
    return 'Todos os livros então aqui';
  }

  @Post()
  saveBook(@Body() newBook: BookDTO): BookDTO {
    return newBook;
  }
}
