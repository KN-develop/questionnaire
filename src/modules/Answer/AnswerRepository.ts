/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class AnswerRepository
 */
import { Answer } from '../../entities/Answer';
import { NotImplementedException } from '@nestjs/common';

export class AnswerRepository {
  public async save(answer: Answer): Promise<void> {
    throw new NotImplementedException();
  }
}
