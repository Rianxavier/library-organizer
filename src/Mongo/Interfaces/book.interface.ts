import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { AuthorDTO } from 'src/DTO/author.dto';

export interface Book extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly name: string;
  readonly author: AuthorDTO[];
  readonly language: string;
  readonly releaseYear: number;
  readonly publisher: string;
  readonly pages: number;
}
