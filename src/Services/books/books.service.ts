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
      const book = await this.bookRepository.getBookById(bookId);

      if (!book) throw new BadRequestException('This book does not exists');

      return book;
    } catch (error) {
      console.error('Error fetching book:', error);
      throw new BadRequestException('There are no results');
    }
  }

  async getBookByAuthorName(authorName: string): Promise<Book[]> {
    const splitedAuthorName = authorName.split(' ');

    const foundBooks =
      await this.bookRepository.getBookByAuthorName(splitedAuthorName);

    if (!foundBooks.length)
      throw new BadRequestException('No results for this author');

    return foundBooks;
  }

  async deleteBook(bookId: string): Promise<Book> {
    try {
      const book = await this.bookRepository.deleteBook(bookId);

      if (!book) throw new BadRequestException('This book does not exists');

      return book;
    } catch (error) {
      console.error('Error fetching book:', error);
      throw new BadRequestException('This book does not exists');
    }
  }

  async updateBook(bookId: string, newBook: BookDTO): Promise<Book> {
    const book = await this.bookRepository.getBookById(bookId);

    if (!book) throw new BadRequestException('This book does not exists');

    return await this.bookRepository.updateBook(bookId, newBook);
  }
}
