import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../Interfaces/book.interface';
import { BookDTO } from 'src/DTO/books.dto';

@Injectable()
export class BookRepository {
  constructor(@InjectModel('book') private readonly bookModel: Model<Book>) {}

  async saveBook(newBook: BookDTO): Promise<BookDTO> {
    const savedBook = new this.bookModel(newBook);
    const result = await savedBook.save();

    return result.toObject() as BookDTO;
  }

  async getAllBooks(): Promise<BookDTO[]> {
    const allBooks = await this.bookModel
      .find({}, { _v: false })
      .sort({ name: +1 })
      .exec();

    return allBooks;
  }
}
