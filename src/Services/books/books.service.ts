import { BadRequestException, Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async saveBook(newBook: BookDTO): Promise<Book> {
    return await this.bookRepository.saveBook(newBook);
  }

  async getAllBooks(): Promise<Book[]> {
    const allBooks = await this.bookRepository.getAllBooks();

    if (!allBooks.length)
      throw new BadRequestException('There are no books registered yet');

    return allBooks;
  }

  async getBookById(bookId: string): Promise<Book> {
    try {
      return await this.bookRepository.getBookById(bookId);
    } catch (error) {
      console.error('Error fetching book:', error);
      throw new BadRequestException('There are no results');
    }
  }
}
