import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.bookService.getAllBooks();
  }

  @Get(':bookId')
  async getBookById(@Param('bookId') bookId: string): Promise<Book> {
    return this.bookService.getBookById(bookId);
  }

  @Post()
  async saveBook(@Body() newBook: BookDTO): Promise<BookDTO> {
    return await this.bookService.saveBook(newBook);
  }
}
