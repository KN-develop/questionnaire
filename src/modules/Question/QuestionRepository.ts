/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class QuestionRepository
 */
import { Question } from '../../entities/Question';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Collection, Connection, Types } from 'mongoose';

@Injectable()
export class QuestionRepository {
  private readonly collection: Collection =
    this.connection.collection('questions');

  constructor(@InjectConnection() private readonly connection: Connection) {}

  public async save(question: Question): Promise<void> {
    const document = {
      content: Reflect.get(question, 'content'),
      authorId: Reflect.get(question, 'authorId'),
    };
    const result = await this.collection.insertOne(document);
    Reflect.set(question, 'id', result.insertedId.toString());
  }

  public async get(id: string): Promise<Question> {
    const objectId = new Types.ObjectId(id);
    const found = await this.collection.findOne({ _id: objectId });
    if (!found) {
      throw new Error('Question not found');
    }

    const plain = {} as Question;

    Reflect.set(plain, 'id', found._id.toString());
    Reflect.set(plain, 'content', found.content);
    Reflect.set(plain, 'authorId', found.authorId);
    Reflect.setPrototypeOf(plain, Question.prototype);

    return plain;
  }

  public async update(question: Question): Promise<void> {
    const id = Reflect.get(question, 'id');

    if (!id) {
      throw new Error('Update can be only on entity with id');
    }

    const document = {
      content: Reflect.get(question, 'content'),
      authorId: Reflect.get(question, 'authorId'),
    };

    await this.collection.updateOne(
      {
        _id: new Types.ObjectId(id),
      },
      {
        $set: document,
      },
    );
  }

  public async delete(question: Question): Promise<void> {
    const id = Reflect.get(question, 'id');

    if (!id) {
      throw new Error('Remove can be only on entity with id');
    }

    await this.collection.deleteOne({
      _id: new Types.ObjectId(id),
    });
  }

  public async all(): Promise<Question[]> {
    const documents = await this.collection.find({}).toArray();
    return documents.map((document) => {
      const question = {} as Question;
      Reflect.set(question, 'content', document.content);
      Reflect.set(question, 'authorId', document.authorId);
      Reflect.set(question, '_id', document._id.toString());
      Reflect.setPrototypeOf(question, Question.prototype);

      return question;
    });
  }
}
