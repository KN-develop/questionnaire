/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class QuestionRepository
 */
import { Question } from '../entities/Question';
import { NotImplementedException } from '@nestjs/common';

export class QuestionRepository {
  public async save(question: Question): Promise<void> {
    throw new NotImplementedException();
  }
}
