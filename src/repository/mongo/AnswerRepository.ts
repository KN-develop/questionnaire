/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class AnswerRepository
 */
import { Answer } from '../../entities/Answer';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { Collection, Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { AnswerRepositoryInterface } from '../../modules/Answer/AnswerRepositoryInterface';

@Injectable()
export class AnswerRepository implements AnswerRepositoryInterface {
  private readonly collection: Collection =
    this.connection.collection('answers');

  constructor(@InjectConnection() private readonly connection: Connection) {}

  public async save(answer: Answer): Promise<void> {
    throw new NotImplementedException();
  }
}
