import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAllBooks(): string {
    return 'Todos os livros então aqui';
  }

  @Post()
  async saveBook(@Body() newBook: BookDTO): Promise<BookDTO> {
    return await this.bookService.saveBook(newBook);
  }
}
