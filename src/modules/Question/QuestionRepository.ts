/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class QuestionRepository
 */
import { Question } from '../../entities/Question';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Collection, Connection, Types } from 'mongoose';
import { entityToDocument, documentToEntity } from '../../helpers/mongoMapper';
import { RepositoryInterface } from '../../repository/RepositoryInterface';
import { Answer } from '../../entities/Answer';

@Injectable()
export class QuestionRepository implements RepositoryInterface {
  private readonly collection: Collection =
    this.connection.collection('questions');

  constructor(@InjectConnection() private readonly connection: Connection) {}

  public async save(question: Question): Promise<void> {
    const document = this.entityToDocument(question);
    const result = await this.collection.insertOne(document);
    Reflect.set(question, 'id', result.insertedId.toString());
  }

  public async get(id: string): Promise<Question> {
    const objectId = new Types.ObjectId(id);
    const found = (
      await this.collection.aggregate([
        { $match: { _id: objectId } },
        {
          $lookup: {
            from: 'answers',
            localField: 'answers',
            foreignField: '_id',
            as: 'answers',
          },
        },
        { $unwind: '$answers' },
        { $limit: 1 },
      ])
    ).toArray()[0];
    /*const found = await this.collection.findOne({ _id: objectId });*/
    if (!found) {
      throw new Error('Question not found');
    }

    return this.documentToEntity(found);
  }

  public async update(question: Question): Promise<void> {
    const id = Reflect.get(question, 'id');

    if (!id) {
      throw new Error('Update can be only on entity with id');
    }

    const document = this.entityToDocument(question);

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
    return documents.map(this.documentToEntity);
  }

  private documentToEntity(document: any): Question {
    const question = {} as Question;
    const answers = document.answers
      ? document.answers.map((answer) => {
          const plain = {} as Answer;

          Reflect.set(plain, 'content', answer.content);
          Reflect.set(plain, 'status', answer.status);
          Reflect.setPrototypeOf(plain, Answer.prototype);
          return plain;
        })
      : [];

    Reflect.set(question, 'id', document._id.toString());
    Reflect.set(question, 'content', document.content);
    Reflect.set(question, 'authorId', document.authorId);
    Reflect.set(question, 'answers', answers);
    Reflect.setPrototypeOf(question, Question.prototype);

    return question;
  }

  private entityToDocument(question: Question): any {
    return entityToDocument<Question>(question, ['content', 'authorId']);
  }
}
