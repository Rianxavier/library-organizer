import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Get('id/:bookId')
  async getBookById(@Param('bookId') bookId: string): Promise<Book> {
    return await this.bookService.getBookById(bookId);
  }

  @Get('author/:authorName')
  async getBookByAuthorName(
    @Param('authorName') authorName: string,
  ): Promise<Book[]> {
    return await this.bookService.getBookByAuthorName(authorName);
  }

  @Get('name/:bookName')
  async getBookByName(@Param('bookName') bookName: string): Promise<Book[]> {
    return await this.bookService.getBookByName(bookName);
  }

  @Post()
  async saveBook(@Body() newBook: BookDTO): Promise<Book> {
    return await this.bookService.saveBook(newBook);
  }

  @Delete(':bookId')
  async deleteBook(@Param('bookId') bookId: string): Promise<Book> {
    return await this.bookService.deleteBook(bookId);
  }

  @Patch(':bookId')
  async updateBook(
    @Param('BookId') bookId: string,
    @Body() newBook: BookDTO,
  ): Promise<Book> {
    return await this.bookService.updateBook(bookId, newBook);
  }
}
