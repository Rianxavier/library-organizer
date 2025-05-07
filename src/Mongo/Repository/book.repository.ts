import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../Interfaces/book.interface';
import { BookDTO } from 'src/DTO/books.dto';

@Injectable()
export class BookRepository {
  constructor(@InjectModel('book') private readonly bookModel: Model<Book>) {}

  async saveBook(newBook: BookDTO): Promise<Book> {
    const savedBook = new this.bookModel(newBook);
    const result = await savedBook.save();

    return result;
  }

  async getAllBooks(): Promise<Book[]> {
    const allBooks = await this.bookModel
      .find({}, { _v: false })
      .sort({ name: +1 })
      .exec();

    return allBooks;
  }

  async getBookById(bookId: string): Promise<Book> {
    const book = await this.bookModel.findById(bookId, { __v: false });
    if (!book) throw new Error('Book not found');

    return book;
  }
}
