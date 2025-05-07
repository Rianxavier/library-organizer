import { BadRequestException, Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async saveBook(newBook: BookDTO): Promise<BookDTO> {
    return await this.bookRepository.saveBook(newBook);
  }

  async getAllBooks(): Promise<BookDTO[]> {
    const allBooks = await this.bookRepository.getAllBooks();

    if (!allBooks.length)
      throw new BadRequestException('There are no books registered yet');

    return allBooks;
  }
}
